import { useState } from "react"
export const TaskForm = ({ task, onAdd, onEdit }) => {
    const [text, setText] = useState(() => task ? task.text : '');
    const [description, setDescription] = useState(() => task ? task.description : '');
    const [done, setDone] = useState(() => task ? task.done : false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (task) {
            onEdit(task.id, { text, description, done })
        } else {
            onAdd({ text, description, done });
            setText('');
            setDescription('');
            setDone(false);
        }
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input type='text' placeholder='Add Task Description' value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Done</label>
                <input type='checkbox' value={done} checked={done} onChange={(e) => setDone(e.currentTarget.checked)} />
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}
