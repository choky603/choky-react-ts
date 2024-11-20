import { create } from 'zustand';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoStore {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    addTodo: (text) => set((state) => {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
      };
      return { todos: [...state.todos, newTodo] };
    }),
    removeTodo: (id) => set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
    toggleTodo: (id) => set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  }));
