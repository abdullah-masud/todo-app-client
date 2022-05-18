import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTodo = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data.description)
        const url = `https://tranquil-chamber-47257.herokuapp.com/todo`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Todo Added')
            })
    };



    return (
        <div className="card lg:w-3/4 bg-base-100 shadow-xl mx-auto mb-5">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                <input type="text" placeholder="Task Name" className="input input-bordered mt-5 w-2/3 mb-6" {...register("taskName", { required: true, maxLength: 20 })} />
                <input type="text" placeholder="Description" className="input input-bordered w-2/3 " {...register("description")} />
                <button className="btn btn-primary my-5 mb-8" type='submit'>Add Task</button>
            </form>
        </div>
    );
};

export default AddTodo;