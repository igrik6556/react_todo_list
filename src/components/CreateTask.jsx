import React, { useState } from 'react';
import ContainerWrap from './hoc/ContainerWrap/ContainerWrap';
import Button from './UI/Button/Button';
import CustomInput from './UI/CustomInput/CustomInput';

const CreateTask = ({create}) => {
    const [task, setTask] = useState("")

    const addTask = () => {
        const taskDescInput = document.querySelector('#id_new_task_desc')
        const newTaskID = `TODO_${Date.now()}`

        if (task) {
            taskDescInput.classList.remove('is-invalid')
            localStorage.setItem(newTaskID, task)
            setTask("")
            create({key: newTaskID, name: task})
        } else {
            taskDescInput.classList.add('is-invalid')
        }
    }

    return (
        <ContainerWrap>
            <form className="row my-4">
                <div className="col">
                    <CustomInput id="id_new_task_desc" placeholder="Type here task description" value={task} onChange={e => setTask(e.target.value)} />
                </div>
                <div className="col-auto">
                    <Button className="btn btn-success" onClick={addTask}>Create new task</Button>
                </div>
            </form>
        </ContainerWrap>
    );
};

export default CreateTask;