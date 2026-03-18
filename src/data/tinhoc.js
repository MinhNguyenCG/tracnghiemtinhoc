import rawContent from '../../questions/tinhoc.md?raw';
import { createQuizMeta, parseQuestions } from './quizParser';

export const questions = parseQuestions(rawContent, { defaultSection: 'Tin học' });

export const quizMeta = createQuizMeta(questions);
