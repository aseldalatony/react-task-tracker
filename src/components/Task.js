import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react/cjs/react.development";
import { TaskForm } from "./TaskForm";

export const Task = ({ task, onDelete, onEdit }) => {
    const [showEdit, setShowEdit] = useState(false);
    const afterEdit = (id, task) => {
        onEdit(id, task);
        setShowEdit(!showEdit);
    }
    return (
        <div>
            <div className={`task ${task.done ? 'reminder' : ''}`} onDoubleClick={() => setShowEdit(!showEdit)}>
                <h3>{task.text} <AiOutlineClose style={{ color: 'red', cursor: 'pointer' }} onClick={(() => onDelete(task.id))} /></h3>
                <p>{task.description}</p>

            </div>
            {showEdit && <TaskForm task={task} onEdit={afterEdit} />}
        </div>
    )
}