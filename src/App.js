import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from "react";
import { TaskForm } from "./components/TaskForm";

const App = () => {
    const [index, setIndex] = useState(3);
    const [showAdd, setShowAdd] = useState(false);
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'task 1',
                description: 'task 1 desc',
                done: true
            },
            {
                id: 2,
                text: 'task 2',
                description: 'task 2 desc',
                done: true
            },
            {
                id: 3,
                text: 'task 3',
                description: 'task 3 desc',
                done: false
            }
        ]
    )

    const onDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const onAdd = (task) => {
        let x = index + 1;
        task.id = x;
        setIndex(x);
        setTasks([...tasks, task]);
        setShowAdd(!showAdd);
    }

    const onEdit = (id, task) => {
        setTasks(tasks.map((item) => {
            if (item.id === id) {
                item.text = task.text;
                item.description = task.description;
                item.done = task.done;
            }
            return item;
        }));
    }

    return (
        <div className='container'>
            <Header showAdd={showAdd} onShowAdd={() => setShowAdd(!showAdd)} />
            {showAdd && <TaskForm onAdd={onAdd} />}
            <Tasks tasks={tasks} onDelete={onDelete} onEdit={onEdit}/>
        </div>
    );
}

export default App;