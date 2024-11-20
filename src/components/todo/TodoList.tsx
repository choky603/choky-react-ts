import React, { useState } from 'react';
import { useTodoStore } from "../../store/todoStore";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [inputText, setInputText] = useState('');
    const { todos, addTodo } = useTodoStore();

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
                    <TodoItem key={todo.id} todo={todo}></TodoItem>
                ))}
            </ul>
            
        </div>
    )
}

export default TodoList;