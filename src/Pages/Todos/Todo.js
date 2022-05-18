import { toast } from 'react-toastify';
import useStrike from '../../hooks/useStrike';

const Todo = ({ todo, todos, setTodos }) => {
    const { taskName, description, _id } = todo

    const [strike, setStrike] = useStrike()

    const handleDelete = (id) => {
        const proceed = window.confirm('Are You Sure?');
        if (proceed) {
            const url = `https://tranquil-chamber-47257.herokuapp.com/todos/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = todos.filter(todo => todo._id !== id);
                    setTodos(remaining);
                    toast.error('Todo Deleted')
                })
        }
    }

    const handleComplete = () => {
        setStrike("line-through")
        toast.success('Todo Completed')
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 style={{ textDecoration: strike }}><span className="font-bold">Task Name</span>: {taskName}</h2>
                <p><span className='font-bold'>Description</span>: {description}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleComplete} className="btn btn-outline btn-success">Complete</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">Delete</button>
                </div>
            </div>
        </div >
    );
};

export default Todo;