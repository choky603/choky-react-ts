import React from 'react';
import { useTodoStore, Todo } from "../../store/todoStore";

const TodoItem = ({todo}: {todo: Todo}) => {
    const { removeTodo, toggleTodo } = useTodoStore();

    return (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleTodo(todo.id)} style={{ cursor: 'pointer' }}>
            {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>삭제</button>
        </li>
    )
}

export default TodoItem;