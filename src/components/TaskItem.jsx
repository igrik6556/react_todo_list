import React, { useState } from 'react';
import Button from './UI/Button/Button'

const TaskItem = ({taskKey, taskName, ...props}) => {
    const [taskStatus, setTaskStatus] = useState("TODO")

    const changeTaskStatus = (action, key) => {
        localStorage.removeItem(key)

        const newKey = key.replace('TODO', action.toUpperCase())
        localStorage.setItem(newKey, taskName)
    }

    return (
        <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3" id={taskKey}>
            <p className="mb-0">{taskName}</p>
            <div className="btns d-flex flex-nowrap ms-4">
                <Button className="btn btn-success" onClick={() => changeTaskStatus('done', taskKey)}>Done</Button>
                <Button className="btn btn-secondary ms-3" onClick={() => changeTaskStatus('delete', taskKey)}>Delete</Button>
            </div>
        </div>
    );
};

export default TaskItem;