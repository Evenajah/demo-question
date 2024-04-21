import { Answer } from "./Answer";

export interface Questionnair {
  questionId: number;
  questionDesc: string;
  answers: Answer[];
  selectedAnswer: string;
}
