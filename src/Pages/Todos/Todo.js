import { toast } from 'react-toastify';

const Todo = ({ todo, todos, setTodos }) => {
    const { taskName, description, _id, isComplete } = todo

    const handleDelete = (id) => {
        const proceed = window.confirm('Are You Sure?');
        if (proceed) {
            const url = `http://localhost:5000/todos/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remaining = todos.filter(todo => todo._id !== id);
                    setTodos(remaining);
                    toast.error('Todo Deleted')
                })
        }
    }

    const handleComplete = (id) => {
        const isComplete = true;
        fetch(`http://localhost:5000/complete/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ isComplete })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Todo Completed")
            })

    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 style={{ textDecoration: isComplete && "line-through" }}><span className="font-bold">Task Name</span>: {taskName}</h2>

                <p style={{ textDecoration: isComplete && "line-through" }}><span className='font-bold'>Description</span>: {description}</p>
                <div className="card-actions justify-end">
                    <button disabled={isComplete && true} onClick={() => handleComplete(_id)} className="btn btn-outline btn-success">Complete</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">Delete</button>
                </div>
            </div>
        </div >
    );
};

export default Todo;