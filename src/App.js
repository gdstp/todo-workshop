import { useState } from 'react';
import './App.css';
import ListInput from './components/ListInput';
import ListItem from './components/ListItem';

function App() {
  const [todoList, setTodoList] = useState([]);

  const createTodo = (newTitle) => {
    setTodoList((state) => [
      ...state,
      { id: state.length + 1, title: newTitle, isChecked: false },
    ]);
  };

  const removeTodo = (id) => {
    const updatedTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodos);
  };

  const toggleCompleteTodo = (id) => {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, isChecked: !todo.isChecked };
      return todo;
    });
    setTodoList(updatedTodos);
  };

  return (
    <div className='page-container'>
      <div className='page-content'>
        <ListInput onSubmit={(e) => createTodo(e)} />
        <div className='list-area'>
          <h1>Todo List</h1>
          <div className='list-data'>
            {todoList.map((item) => (
              <ListItem
                key={item.id}
                title={item.title}
                isChecked={item.isChecked}
                onDelete={() => removeTodo(item.id)}
                onComplete={() => toggleCompleteTodo(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
