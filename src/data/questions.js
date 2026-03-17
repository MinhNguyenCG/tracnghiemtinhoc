import rawContent from '../../question.md?raw';

function stripDiacritics(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function cleanInlineCode(text) {
  return text.replace(/`([^`]+)`/g, '$1').trim();
}

function extractChoiceLetter(text) {
  const match = stripDiacritics(text).match(/Chon\s+([A-D])/i);
  return match ? match[1].toUpperCase() : null;
}

function parseOptions(block) {
  return block
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^[A-D]\./.test(line))
    .map((line) => {
      const match = line.match(/^([A-D])\.\s*(.*)$/);
      return {
        id: match[1],
        text: cleanInlineCode(match[2]),
      };
    });
}

function parseQuestions(markdown) {
  const normalized = markdown.replace(/\r\n/g, '\n');
  const sectionBlocks = normalized.split(/\n(?=##\s+)/).filter(Boolean);

  return sectionBlocks.flatMap((sectionBlock) => {
    const sectionTitleMatch = sectionBlock.match(/^##\s+(.*)$/m);
    const sectionTitle = sectionTitleMatch ? sectionTitleMatch[1].trim() : 'Cau hoi';
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

        const options = parseOptions(block);
        const answer = extractChoiceLetter(block);
        const explanationMatch = block.match(/Lời giải\n([\s\S]*?)\nChọn\s+[A-D]/i);
        const explanation = explanationMatch
          ? cleanInlineCode(
              explanationMatch[1]
                .replace(/```[\s\S]*?```/g, '')
                .replace(/^-\s+/gm, '')
                .replace(/\n{2,}/g, ' ')
            )
          : '';

        if (!options.length || !answer) {
          return null;
        }

        return {
          id: `${stripDiacritics(sectionTitle).toLowerCase().replace(/[^a-z0-9]+/g, '-')}-cau-${titleMatch[1]}`,
          section: sectionTitle,
          number: titleMatch[1],
          question: cleanInlineCode(titleMatch[2]),
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
