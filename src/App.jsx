import React, { useMemo, useState } from 'react';
import ContentBlocks from './components/ContentBlocks';
import { questions } from './data/questions';

function shuffleItems(items) {
  const nextItems = [...items];

  for (let index = nextItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [nextItems[index], nextItems[randomIndex]] = [nextItems[randomIndex], nextItems[index]];
  }

  return nextItems;
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isShuffled, setIsShuffled] = useState(false);
  const [questionItems, setQuestionItems] = useState(questions);

  const currentQuestion = questionItems[currentIndex];
  const currentSelection = selectedAnswers[currentQuestion?.id];

  const correctCount = useMemo(
    () =>
      questionItems.reduce((total, question) => {
        return total + (selectedAnswers[question.id] === question.answer ? 1 : 0);
      }, 0),
    [questionItems, selectedAnswers]
  );

  const answeredCount = Object.keys(selectedAnswers).length;
  const completion = Math.round((answeredCount / questionItems.length) * 100);

  const handleSelect = (optionId) => {
    if (!currentQuestion || currentSelection) {
      return;
    }

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const goToQuestion = (index) => {
    setCurrentIndex(index);
  };

  const nextQuestion = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, questionItems.length - 1));
  };

  const previousQuestion = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const resetSession = (nextItems, shuffled) => {
    setQuestionItems(nextItems);
    setIsShuffled(shuffled);
    setCurrentIndex(0);
    setSelectedAnswers({});
  };

  const handleShuffle = () => {
    resetSession(shuffleItems(questions), true);
  };

  const handleRestoreOrder = () => {
    resetSession(questions, false);
  };

  if (!currentQuestion) {
    return <div className="empty-state">Không tìm thấy dữ liệu câu hỏi.</div>;
  }

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">React quiz UI</span>
          <h1>Ôn tập trắc nghiệm Tin học với phản hồi đúng sai ngay lập tức</h1>
          <p>
            Toàn bộ câu hỏi được đọc từ <code>question.md</code>, gồm giao diện mượt, dễ tập trung,
            thao tác nhanh trên cả desktop lẫn mobile.
          </p>
        </div>

        <div className="stats-grid">
          <article className="stat-card accent">
            <span>Tổng câu</span>
            <strong>{questionItems.length}</strong>
          </article>
          <article className="stat-card">
            <span>Đã trả lời</span>
            <strong>{answeredCount}</strong>
          </article>
          <article className="stat-card">
            <span>Trả lời đúng</span>
            <strong>{correctCount}</strong>
          </article>
          <article className="stat-card">
            <span>Chế độ</span>
            <strong>{isShuffled ? 'Trộn' : 'Gốc'}</strong>
          </article>
        </div>

        <div className="hero-actions">
          <button type="button" className="nav-button primary" onClick={handleShuffle}>
            Xáo trộn câu hỏi
          </button>
          <button type="button" className="nav-button secondary" onClick={handleRestoreOrder}>
            Thứ tự gốc
          </button>
        </div>
      </section>

      <section className="content-grid">
        <aside className="question-rail">
          <div className="rail-header">
            <h2>Danh sách câu</h2>
            <span>{currentIndex + 1}/{questionItems.length}</span>
          </div>

          <div className="question-list" role="list" aria-label="Danh sách câu hỏi">
            {questionItems.map((question, index) => {
              const answerState = selectedAnswers[question.id];
              const isCorrect = answerState === question.answer;

              return (
                <button
                  key={question.id}
                  type="button"
                  className={[
                    'question-chip',
                    index === currentIndex ? 'active' : '',
                    answerState ? (isCorrect ? 'correct' : 'wrong') : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => goToQuestion(index)}
                >
                  <span>{question.number}</span>
                  <small>{question.section}</small>
                </button>
              );
            })}
          </div>
        </aside>

        <section className="question-card">
          <div className="question-card-header">
            <div>
              <span className="section-tag">{currentQuestion.section}</span>
              <h2>{currentQuestion.heading}.</h2>
              <ContentBlocks blocks={currentQuestion.stem.blocks} className="question-content" />
            </div>

            <div
              className="progress-ring"
              aria-label="Tiến độ"
              style={{
                background: `radial-gradient(circle at center, rgba(17, 21, 29, 0.98) 58%, transparent 60%), conic-gradient(var(--accent) ${completion * 3.6}deg, rgba(255, 255, 255, 0.12) 0deg)`,
              }}
            >
              <strong>{completion}%</strong>
              <span>hoàn thành</span>
            </div>
          </div>

          <div className="options-grid">
            {currentQuestion.options.map((option) => {
              const isSelected = currentSelection === option.id;
              const isAnswer = currentQuestion.answer === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  className={[
                    'option-card',
                    isSelected ? 'selected' : '',
                    currentSelection && isAnswer ? 'is-answer' : '',
                    currentSelection && isSelected && !isAnswer ? 'is-wrong' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => handleSelect(option.id)}
                  disabled={Boolean(currentSelection)}
                >
                  <span className="option-label">{option.id}</span>
                  <ContentBlocks blocks={option.content.blocks} className="option-content" />
                </button>
              );
            })}
          </div>

          <div className={['feedback-panel', currentSelection ? 'visible' : ''].join(' ')}>
            {currentSelection ? (
              <>
                <div className={currentSelection === currentQuestion.answer ? 'feedback ok' : 'feedback nope'}>
                  {currentSelection === currentQuestion.answer
                    ? 'Chính xác. Bạn đã chọn đúng đáp án.'
                    : `Chưa đúng. Đáp án đúng là ${currentQuestion.answer}.`}
                </div>
                {currentQuestion.explanation.blocks.length ? (
                  <ContentBlocks blocks={currentQuestion.explanation.blocks} className="feedback-content" />
                ) : null}
              </>
            ) : (
              <div className="feedback hint">Chọn một đáp án để xem kết quả ngay.</div>
            )}
          </div>

          <div className="actions-row">
            <button type="button" className="nav-button secondary" onClick={previousQuestion}>
              Câu trước
            </button>
            <button type="button" className="nav-button primary" onClick={nextQuestion}>
              Câu tiếp
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
