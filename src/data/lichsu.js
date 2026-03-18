import rawContent from '../../questions/lichsu.md?raw';
import { createQuizMeta, parseQuestions } from './quizParser';

export const questions = parseQuestions(rawContent, { defaultSection: 'Quốc phòng' });

export const quizMeta = createQuizMeta(questions);
