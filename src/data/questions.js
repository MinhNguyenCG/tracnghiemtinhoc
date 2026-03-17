import rawContent from '../../question.md?raw';

function stripDiacritics(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function cleanInlineCode(text) {
  return text.replace(/`([^`]+)`/g, '$1').trim();
}

function normalizeSpacing(text) {
  return text.replace(/\r\n/g, '\n').trim();
}

function markdownToBlocks(markdown) {
  const normalized = normalizeSpacing(markdown);

  if (!normalized) {
    return [];
  }

  const parts = normalized.split(/```/);

  return parts
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
        .map((textPart) => cleanInlineCode(textPart))
        .filter(Boolean)
        .map((content) => ({ type: 'text', content }));
    });
}

function parseOptionChunks(optionLines) {
  const options = [];
  let currentOption = null;

  for (const line of optionLines) {
    const optionMatch = line.match(/^([A-D])\.\s*(.*)$/);

    if (optionMatch) {
      if (currentOption) {
        options.push(currentOption);
      }

      currentOption = {
        id: optionMatch[1],
        raw: optionMatch[2] ? [optionMatch[2]] : [],
      };

      continue;
    }

    if (currentOption) {
      currentOption.raw.push(line);
    }
  }

  if (currentOption) {
    options.push(currentOption);
  }

  return options.map((option) => {
    const rawText = option.raw.join('\n').trim();
    const blocks = markdownToBlocks(rawText);
    const fallbackText = cleanInlineCode(
      rawText
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/\n+/g, ' ')
        .trim()
    );

    return {
      id: option.id,
      text: fallbackText,
      blocks,
    };
  });
}

function extractChoiceLetter(text) {
  const match = stripDiacritics(text).match(/Chon\s+([A-D])/i);
  return match ? match[1].toUpperCase() : null;
}

function parseQuestions(markdown) {
  const normalized = normalizeSpacing(markdown);
  const sectionBlocks = normalized.split(/\n(?=##\s+)/).filter(Boolean);

  return sectionBlocks.flatMap((sectionBlock) => {
    const sectionTitleMatch = sectionBlock.match(/^##\s+(.*)$/m);
    const sectionTitle = sectionTitleMatch ? sectionTitleMatch[1].trim() : 'Câu hỏi';
    const content = sectionBlock.replace(/^##\s+.*$/m, '').trim();
    const questionBlocks = content
      .split(/\n(?=Câu\s+\d+\.)/g)
      .filter((block) => stripDiacritics(block.trim()).startsWith('Cau '));

    return questionBlocks
      .map((block) => {
        const lines = block.trim().split('\n');
        const titleLine = lines[0]?.trim();
        const titleMatch = titleLine?.match(/^Câu\s+(\d+)\.\s*(.*)$/);

        if (!titleMatch) {
          return null;
        }

        const body = lines.slice(1).join('\n');
        const explanationIndex = lines.findIndex((line) => line.trim() === 'Lời giải');
        const contentLines = explanationIndex === -1 ? lines.slice(1) : lines.slice(1, explanationIndex);
        const explanationLines = explanationIndex === -1 ? [] : lines.slice(explanationIndex + 1);

        const firstOptionIndex = contentLines.findIndex((line) => /^[A-D]\./.test(line.trim()));

        if (firstOptionIndex === -1) {
          return null;
        }

        const promptLines = [];
        if (titleMatch[2]) {
          promptLines.push(titleMatch[2]);
        }
        promptLines.push(...contentLines.slice(0, firstOptionIndex));

        const optionLines = contentLines.slice(firstOptionIndex);
        const options = parseOptionChunks(optionLines);
        const answer = extractChoiceLetter(explanationLines.join('\n')) || extractChoiceLetter(body);
        const explanationText = explanationLines.join('\n');
        const explanation = cleanInlineCode(
          explanationText
            .replace(/\nChọn\s+[A-D]\s*$/i, '')
            .replace(/```[\s\S]*?```/g, ' ')
            .replace(/^[-*]\s+/gm, '')
            .replace(/\n+/g, ' ')
            .trim()
        );

        if (!options.length || !answer) {
          return null;
        }

        return {
          id: `${stripDiacritics(sectionTitle).toLowerCase().replace(/[^a-z0-9]+/g, '-')}-cau-${titleMatch[1]}`,
          section: sectionTitle,
          number: titleMatch[1],
          question: cleanInlineCode(titleMatch[2]),
          promptBlocks: markdownToBlocks(promptLines.join('\n').trim()),
          options,
          answer,
          explanation,
        };
      })
      .filter(Boolean);
  });
}

export const questions = parseQuestions(rawContent);

export const quizMeta = {
  total: questions.length,
  sections: [...new Set(questions.map((item) => item.section))],
};
