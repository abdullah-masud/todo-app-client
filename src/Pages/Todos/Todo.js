import React from 'react';

const Todo = ({ todo }) => {
    const { taskName, description } = todo
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2><span class="font-bold">Task Name</span>: {taskName}</h2>
                <p><span className='font-bold'>Description</span>: {description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-outline btn-success">Complete</button>
                    <button class="btn btn-outline btn-error">Delete</button>
                </div>
            </div>
        </div >
    );
};

export default Todo;