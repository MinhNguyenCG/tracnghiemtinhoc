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

        return (
          <p key={`${block.type}-${index}`} className="content-text">
            {block.content}
          </p>
        );
      })}
    </div>
  );
}

export default ContentBlocks;
