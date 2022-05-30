import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import AddTodo from './AddTodo';
import Todo from './Todo';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [user] = useAuthState(auth)

    useEffect(() => {
        fetch(`http://localhost:5000/todos?email=${user.email}`)
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [todos, user.email])

    return (
        <div >
            <h2 className='text-3xl text-center mt-5 mb-7'>Todo App</h2>
            <p className='text-center font-semibold text-xs'>{user.email}</p>
            <AddTodo />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 my-3'>
                {
                    todos.map((todo, index) => <Todo
                        key={todo._id}
                        todo={todo}
                        setTodos={setTodos}
                        todos={todos}
                    ></Todo>)
                }
            </div>
        </div>
    );
};

export default Todos;