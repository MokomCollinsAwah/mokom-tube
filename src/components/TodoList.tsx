import  {Props} from './model'
const ToDoList: React.FC<Props> = ({todos}) => {
    
  return (
    <ul>
        {todos.map((todo)=> (
            <li key={todo.id}>{todo.text}</li>
        ))}
    </ul>
  )
}

export default ToDoList