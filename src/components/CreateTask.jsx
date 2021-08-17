import React, { useState } from 'react';
import ContainerWrap from './UI/ContainerWrap/ContainerWrap';
import Button from './UI/Button/Button';
import CustomInput from './UI/CustomInput/CustomInput';

const CreateTask = () => {
    const [task, setTask] = useState("")

    const addTask = () => {
        const taskDescInput = document.querySelector('#id_new_task_desc')

        if (task) {
            taskDescInput.classList.remove('is-invalid')
            localStorage.setItem(`TODO_${Date.now()}`, task)
            taskDescInput.value = ""
        } else {
            taskDescInput.classList.add('is-invalid')
        }
    }

    return (
        <ContainerWrap>
            <div className="row mt-4">
                <div className="col">
                    <CustomInput id="id_new_task_desc" placeholder="Type here task description" onChange={e => setTask(e.target.value)} />
                </div>
                <div className="col-auto">
                    <Button className="btn btn-success" onClick={addTask}>Create new task</Button>
                </div>
            </div>
        </ContainerWrap>
    );
};

export default CreateTask;