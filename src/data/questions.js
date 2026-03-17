import rawContent from '../../question.md?raw';

function stripDiacritics(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function normalizeText(text) {
  return text.replace(/\r\n/g, '\n').trim();
}

function cleanInlineCode(text) {
  return text.replace(/`([^`]+)`/g, '$1').trim();
}

function markdownToPlainText(markdown) {
  return cleanInlineCode(markdown.replace(/```[\s\S]*?```/g, ' ').replace(/\n+/g, ' '));
}

function markdownToBlocks(markdown) {
  const normalized = normalizeText(markdown);

  if (!normalized) {
    return [];
  }

  return normalized
    .split(/```/)
    .map((part, index) => {
      if (index % 2 === 1) {
        const lines = part.split('\n');
        const firstLine = lines[0]?.trim() ?? '';
        const hasLanguage = /^[a-zA-Z0-9_+#-]+$/.test(firstLine);

        return {
          type: 'code',
          language: hasLanguage ? firstLine : '',
          content: hasLanguage ? lines.slice(1).join('\n').trim() : part.trim(),
        };
      }

      return {
        type: 'text',
        content: part,
      };
    })
    .flatMap((block) => {
      if (block.type === 'code') {
        return block.content ? [block] : [];
      }

      return block.content
        .split(/\n{2,}/)
        .map((part) => cleanInlineCode(part))
        .filter(Boolean)
        .map((content) => ({ type: 'text', content }));
    });
}

function createRichContent(markdown) {
  const source = normalizeText(markdown);

  return {
    source,
    plainText: markdownToPlainText(source),
    blocks: markdownToBlocks(source),
  };
}

function extractAnswerLetter(text) {
  const match = stripDiacritics(text).match(/Chon\s+([A-D])/i);
  return match ? match[1].toUpperCase() : null;
}

function splitSections(markdown) {
  return normalizeText(markdown).split(/\n(?=##\s+)/).filter(Boolean);
}

function splitQuestionBlocks(sectionContent) {
  return sectionContent
    .split(/\n(?=Câu\s+\d+\.)/g)
    .filter((block) => stripDiacritics(block.trim()).startsWith('Cau '));
}

function splitOptionGroups(lines) {
  const groups = [];
  let currentGroup = null;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const match = line.match(/^([A-D])\.\s*(.*)$/);

    if (match) {
      if (currentGroup) {
        groups.push(currentGroup);
      }

      currentGroup = {
        id: match[1],
        lines: match[2] ? [match[2]] : [],
      };
      continue;
    }

    if (currentGroup) {
      currentGroup.lines.push(rawLine);
    }
  }

  if (currentGroup) {
    groups.push(currentGroup);
  }

  return groups;
}

function parseQuestion(sectionTitle, block) {
  const lines = normalizeText(block).split('\n');
  const titleMatch = lines[0]?.trim().match(/^Câu\s+(\d+)\.\s*(.*)$/);

  if (!titleMatch) {
    return null;
  }

  const explanationIndex = lines.findIndex((line) => line.trim() === 'Lời giải');
  const contentLines = explanationIndex === -1 ? lines.slice(1) : lines.slice(1, explanationIndex);
  const explanationLines = explanationIndex === -1 ? [] : lines.slice(explanationIndex + 1);
  const firstOptionIndex = contentLines.findIndex((line) => /^[A-D]\./.test(line.trim()));

  if (firstOptionIndex === -1) {
    return null;
  }

  const stemMarkdown = [titleMatch[2], ...contentLines.slice(0, firstOptionIndex)].filter(Boolean).join('\n').trim();
  const optionGroups = splitOptionGroups(contentLines.slice(firstOptionIndex));
  const answer = extractAnswerLetter(explanationLines.join('\n')) || extractAnswerLetter(block);
  const explanationMarkdown = explanationLines.join('\n').replace(/\nChọn\s+[A-D]\s*$/i, '').trim();

  if (!optionGroups.length || !answer) {
    return null;
  }

  return {
    id: `${stripDiacritics(sectionTitle).toLowerCase().replace(/[^a-z0-9]+/g, '-')}-cau-${titleMatch[1]}`,
    section: sectionTitle,
    number: titleMatch[1],
    answer,
    heading: `Câu ${titleMatch[1]}`,
    stem: createRichContent(stemMarkdown),
    options: optionGroups.map((option) => ({
      id: option.id,
      label: option.id,
      content: createRichContent(option.lines.join('\n').trim()),
    })),
    explanation: createRichContent(explanationMarkdown),
  };
}

function parseQuestions(markdown) {
  return splitSections(markdown).flatMap((sectionBlock) => {
    const sectionTitle = sectionBlock.match(/^##\s+(.*)$/m)?.[1]?.trim() ?? 'Câu hỏi';
    const sectionContent = sectionBlock.replace(/^##\s+.*$/m, '').trim();

    return splitQuestionBlocks(sectionContent)
      .map((block) => parseQuestion(sectionTitle, block))
      .filter(Boolean);
  });
}

export const questions = parseQuestions(rawContent);

export const quizMeta = {
  total: questions.length,
  sections: [...new Set(questions.map((item) => item.section))],
};
