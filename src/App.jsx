import React, { useMemo, useState } from 'react';
import ContentBlocks from './components/ContentBlocks';
import { questions as defenseQuestions } from './data/lichsu';
import { questions as informaticsQuestions } from './data/tinhoc';

const PAGE_SWITCH_MS = 320;

const QUIZ_PAGES = {
  'tin-hoc': {
    id: 'tin-hoc',
    label: 'Tin học',
    shortLabel: 'Tin học',
    symbol: '</>',
    statLabel: 'Lệnh, kiểu dữ liệu',
    eyebrow: 'Bộ đề môn Tin học',
    title: 'Ôn tập trắc nghiệm Tin học với phản hồi đúng sai ngay lập tức',
    blurb: 'Tập trung vào các bài lập trình, lệnh cơ bản và câu hỏi thao tác nhanh.',
    source: 'questions/tinhoc.md',
    accentClass: 'theme-tinhoc',
    questions: informaticsQuestions,
  },
  'quoc-phong': {
    id: 'quoc-phong',
    label: 'Quốc phòng',
    shortLabel: 'Quốc phòng',
    symbol: 'QP',
    statLabel: 'Lực lượng, nhiệm vụ, truyền thống',
    eyebrow: 'Bộ đề môn Quốc phòng',
    title: 'Làm bộ câu hỏi Quốc phòng riêng để học nhanh và đối chiếu lời giải dễ dàng',
    blurb: 'Giữ nguyên cấu trúc tài liệu gốc để ôn theo mạch khái niệm, lực lượng và truyền thống.',
    source: 'questions/lichsu.md',
    accentClass: 'theme-quocphong',
    questions: defenseQuestions,
  },
};

function getPageFromLocation() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  return QUIZ_PAGES[path] ? path : 'tin-hoc';
}

function shuffleItems(items) {
  const nextItems = [...items];

  for (let index = nextItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [nextItems[index], nextItems[randomIndex]] = [nextItems[randomIndex], nextItems[index]];
  }

  return nextItems;
}

function App() {
  const [pageId, setPageId] = useState(getPageFromLocation);
  const activePage = QUIZ_PAGES[pageId];
  const sourceQuestions = activePage.questions;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isShuffled, setIsShuffled] = useState(false);
  const [sectionFilter, setSectionFilter] = useState('all');
  const [railFilter, setRailFilter] = useState('all');
  const [isSwitchingPage, setIsSwitchingPage] = useState(false);
  const [questionItems, setQuestionItems] = useState(sourceQuestions);

  const availableSections = useMemo(() => [...new Set(sourceQuestions.map((item) => item.section))], [sourceQuestions]);

  React.useEffect(() => {
    const handlePopState = () => {
      setPageId(getPageFromLocation());
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  React.useEffect(() => {
    if (window.location.pathname === '/' || window.location.pathname === '') {
      window.history.replaceState({}, '', '/tin-hoc');
      setPageId('tin-hoc');
    }
  }, []);

  React.useEffect(() => {
    setIsSwitchingPage(true);
    setSectionFilter('all');
    setRailFilter('all');
    setQuestionItems(sourceQuestions);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsShuffled(false);

    const timer = window.setTimeout(() => {
      setIsSwitchingPage(false);
    }, PAGE_SWITCH_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [sourceQuestions]);

  React.useEffect(() => {
    const nextQuestions = sourceQuestions.filter((item) => sectionFilter === 'all' || item.section === sectionFilter);
    setQuestionItems(isShuffled ? shuffleItems(nextQuestions) : nextQuestions);
    setCurrentIndex(0);
  }, [isShuffled, sectionFilter, sourceQuestions]);

  const currentQuestion = questionItems[currentIndex];
  const currentSelection = selectedAnswers[currentQuestion?.id];

  const correctCount = useMemo(
    () =>
      questionItems.reduce((total, question) => {
        return total + (selectedAnswers[question.id] === question.answer ? 1 : 0);
      }, 0),
    [questionItems, selectedAnswers]
  );

  const answeredCount = questionItems.reduce((total, question) => total + (selectedAnswers[question.id] ? 1 : 0), 0);
  const completion = questionItems.length ? Math.round((answeredCount / questionItems.length) * 100) : 0;
  const railItems = useMemo(() => {
    return questionItems
      .map((question, index) => ({ question, index }))
      .filter(({ question }) => {
        if (railFilter === 'all') {
          return true;
        }

        const answerState = selectedAnswers[question.id];

        if (railFilter === 'unanswered') {
          return !answerState;
        }

        if (railFilter === 'correct') {
          return answerState === question.answer;
        }

        if (railFilter === 'wrong') {
          return Boolean(answerState) && answerState !== question.answer;
        }

        return true;
      });
  }, [questionItems, railFilter, selectedAnswers]);

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
    resetSession(shuffleItems(questionItems), true);
  };

  const handleRestoreOrder = () => {
    const nextQuestions = sourceQuestions.filter((item) => sectionFilter === 'all' || item.section === sectionFilter);
    resetSession(nextQuestions, false);
  };

  const navigateToPage = (nextPageId) => {
    const nextPath = nextPageId === 'tin-hoc' ? '/tin-hoc' : `/${nextPageId}`;

    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
      setPageId(nextPageId);
    }
  };

  if (!currentQuestion) {
    return <div className="empty-state">Không tìm thấy dữ liệu câu hỏi.</div>;
  }

  return (
    <main className={['app-shell', activePage.accentClass, isSwitchingPage ? 'page-switching' : 'page-ready'].join(' ')}>
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-kicker">{activePage.symbol}</span>
          <div>
            <strong>Kho câu hỏi theo môn</strong>
            <p>Chuyển nhanh giữa các bộ đề mà không cần rời trang.</p>
          </div>
        </div>

        <nav className="top-nav" aria-label="Điều hướng môn học">
          {Object.values(QUIZ_PAGES).map((page) => (
            <button
              key={page.id}
              type="button"
              className={['top-nav-link', page.id === activePage.id ? 'active' : ''].filter(Boolean).join(' ')}
              onClick={() => navigateToPage(page.id)}
            >
              <i className="nav-symbol" aria-hidden="true">{page.symbol}</i>
              <span>{page.shortLabel}</span>
              <small>{page.questions.length} câu</small>
            </button>
          ))}
        </nav>
      </header>

      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">{activePage.eyebrow}</span>
          <h1>{activePage.title}</h1>
          <p className="hero-blurb">{activePage.blurb}</p>
          <p>
            {activePage.id === 'tin-hoc' ? (
              <>
                Toàn bộ câu hỏi được đọc từ <code>{activePage.source}</code>, giữ nguyên các nhóm bài học
                và thao tác nhanh trên cả desktop lẫn mobile.
              </>
            ) : (
              <>
                Trang này đọc trực tiếp từ <code>{activePage.source}</code>; tệp không chia theo heading
                <code>##</code> nên dữ liệu được render thành một nhóm Quốc phòng duy nhất để khớp nội dung
                gốc.
              </>
            )}
          </p>

          <div className="page-switcher" role="tablist" aria-label="Chọn bộ câu hỏi">
            {Object.values(QUIZ_PAGES).map((page) => (
              <button
                key={page.id}
                type="button"
                role="tab"
                aria-selected={page.id === activePage.id}
                className={['page-tab', page.id === activePage.id ? 'active' : ''].filter(Boolean).join(' ')}
                onClick={() => navigateToPage(page.id)}
              >
                <span>{page.label}</span>
                <em>{page.symbol}</em>
                <small>{page.blurb}</small>
              </button>
            ))}
          </div>

          {activePage.id === 'tin-hoc' ? (
            <div className="filter-panel">
              <label className="filter-field">
                <span>Lọc theo bài học</span>
                <select value={sectionFilter} onChange={(event) => setSectionFilter(event.target.value)}>
                  <option value="all">Tất cả bài học</option>
                  {availableSections.map((section) => (
                    <option key={section} value={section}>
                      {section}
                    </option>
                  ))}
                </select>
              </label>
              <div className="filter-meta">
                <strong>{questionItems.length}</strong>
                <span>câu đang hiển thị</span>
              </div>
            </div>
          ) : null}
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
          <article className="stat-card stat-card-source">
            <span>Nguồn dữ liệu</span>
            <strong>{activePage.source}</strong>
          </article>
          <article className="stat-card stat-card-focus">
            <span>Trọng tâm</span>
            <strong>{activePage.statLabel}</strong>
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

          {activePage.id === 'quoc-phong' ? (
            <div className="rail-filters" role="tablist" aria-label="Lọc câu hỏi quốc phòng">
              {[
                ['all', 'Tất cả'],
                ['unanswered', 'Chưa làm'],
                ['correct', 'Đúng'],
                ['wrong', 'Sai'],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={['rail-filter-pill', railFilter === value ? 'active' : ''].filter(Boolean).join(' ')}
                  onClick={() => setRailFilter(value)}
                >
                  {label}
                </button>
              ))}
            </div>
          ) : null}

          <div className="question-list" role="list" aria-label="Danh sách câu hỏi">
            {railItems.length ? (
              railItems.map(({ question, index }) => {
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
              })
            ) : (
              <div className="rail-empty">Chưa có câu phù hợp với bộ lọc này.</div>
            )}
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
