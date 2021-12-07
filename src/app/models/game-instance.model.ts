export interface GameInstance {
  Name: string;
  GameMaster: string;
  Questions: Question[];
  CurrentQuestion: number;
  Users: User[];
}

export interface Question {
  Question: string;
  Answers: Answer[];
  CorrectAnswer: number;
}
export interface Answer {
  Id: number;
  Answer: string;
  IsCorrect: boolean;
}
export interface User {
  Name: string;
  Answers: number[];
  Score: number;
}
