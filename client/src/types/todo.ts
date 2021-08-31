export interface ITodo {
  _id: number;
  content: string;
  isCheck: boolean;
  createdAt: string;
  upadtedAt: string;
}

export type ITodos = ITodo[];
