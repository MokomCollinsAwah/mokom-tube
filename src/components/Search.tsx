import { useState } from "react"
import {Props} from './model';


const Search: React.FC<Props> = ({todos, setTodos}) => {
    const [todo, setTodo] = useState<string>('');

    const todoHandler = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setTodo(e.target.value);
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if(todo){
            setTodos([...todos, {id: Date.now(), text: todo, completed: false}]);
            setTodo('');
        }
    }

return (
    <form className='flex justify-center w-[90%] relative'
        onSubmit={submitHandler}
    >
    <input 
        type="text" 
        className="ml-6 shadow-inset-black w-full rounded-full px-7 py-5 border-none text-2xl transition duration-200" 
        placeholder='Add a todo' 
        value={todo}
        onChange={todoHandler}
    />
    <button className="hover:bg-yellow-200 active:scale-50 active:shadow-custom-black absolute w-14 h-12 m-3 right-0 border-none text-sm bg-yellow-500 text-white rounded-custom transition-all duration-200 shadow-custom-black">
        Add
    </button>
    </form>

)
}

export default Search