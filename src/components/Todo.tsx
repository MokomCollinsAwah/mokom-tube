import { useState } from 'react'
import Search from './Search'
import ToDoList from './TodoList'
import { Todo } from './model'


const ToDo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div>
        <Search todos={todos} setTodos={setTodos}/>
        <ToDoList todos={todos}/>
    </div>
  )
}

export default ToDo