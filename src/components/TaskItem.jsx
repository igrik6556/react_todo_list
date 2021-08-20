import React from 'react';
import Button from './UI/Button/Button'

const TaskItem = ({taskKey, taskName, changeTaskStatus}) => {

    const changeStatus = (action, key) => {
        changeTaskStatus({key: key, name: taskName})
        localStorage.removeItem(key)

        if (action === 'done') {
            const newKey = key.replace('TODO', action.toUpperCase())
            localStorage.setItem(newKey, taskName)
        }
    }

    return (
        <div className={`d-flex align-items-center justify-content-between border-bottom p-3 mb-3${changeTaskStatus ? "" : " task-done"}`} id={taskKey}>
            <p className="mb-0">{taskName}</p>
            {changeTaskStatus && <div className="btns d-flex flex-nowrap ms-4">
                <Button className="btn btn-success" onClick={() => changeStatus('done', taskKey)}>Done</Button>
                <Button className="btn btn-secondary ms-3" onClick={() => changeStatus('delete', taskKey)}>Delete</Button>
            </div>}
        </div>
    );
};

export default TaskItem;