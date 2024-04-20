export type Todo = {
  id: string;
  body: string;
  complete: boolean;
}

export type IDCallback = (id: string) => void;