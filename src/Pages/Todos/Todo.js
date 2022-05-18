import React from 'react';

const Todo = ({ todo, todos, setTodos }) => {
    const { taskName, description, _id } = todo

    const handleDelete = (id) => {
        const proceed = window.confirm('Are You Sure?');
        if (proceed) {
            const url = `http://localhost:5000/todos/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = todos.filter(todo => todo._id !== id);
                    setTodos(remaining);
                })
        }
    }

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2><span class="font-bold">Task Name</span>: {taskName}</h2>
                <p><span className='font-bold'>Description</span>: {description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-outline btn-success">Complete</button>
                    <button onClick={() => handleDelete(_id)} class="btn btn-outline btn-error">Delete</button>
                </div>
            </div>
        </div >
    );
};

export default Todo;