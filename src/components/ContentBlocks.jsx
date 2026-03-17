import React from 'react';

function renderInlineContent(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

function renderTextBlock(block, index) {
  const lines = block.content.split('\n').map((line) => line.trim()).filter(Boolean);

  if (lines.length && lines.every((line) => /^-\s+/.test(line))) {
    return (
      <ul key={`${block.type}-${index}`} className="content-list">
        {lines.map((line, lineIndex) => (
          <li key={lineIndex}>{renderInlineContent(line.replace(/^-\s+/, ''))}</li>
        ))}
      </ul>
    );
  }

  if (lines.length && lines.every((line) => /^\d+\.\s+/.test(line))) {
    return (
      <ol key={`${block.type}-${index}`} className="content-list ordered">
        {lines.map((line, lineIndex) => (
          <li key={lineIndex}>{renderInlineContent(line.replace(/^\d+\.\s+/, ''))}</li>
        ))}
      </ol>
    );
  }

  return (
    <p key={`${block.type}-${index}`} className="content-text">
      {renderInlineContent(block.content)}
    </p>
  );
}

function ContentBlocks({ blocks, className = '' }) {
  if (!blocks?.length) {
    return null;
  }

  return (
    <div className={className}>
      {blocks.map((block, index) => {
        if (block.type === 'code') {
          return (
            <pre key={`${block.type}-${index}`} className="content-code">
              <code>{block.content}</code>
            </pre>
          );
        }

        return renderTextBlock(block, index);
      })}
    </div>
  );
}

export default ContentBlocks;
