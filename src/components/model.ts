export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}


export interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}