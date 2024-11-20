import React, { useState } from 'react';
import { useTodoStore } from "../store/todoStore";

const TodoList = () => {
    const [inputText, setInputText] = useState('');
    const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();

    const handleAddTodo = () => {
        if (inputText.trim()) {
          addTodo(inputText);
          setInputText('');
        }
      };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <div>
                <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="새 할 일을 입력하세요"
                />
                <button onClick={handleAddTodo}>추가</button>
            </div>
            <ul>
                {todos.map((todo) => (
                <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    <span onClick={() => toggleTodo(todo.id)} style={{ cursor: 'pointer' }}>
                    {todo.text}
                    </span>
                    <button onClick={() => removeTodo(todo.id)}>삭제</button>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;