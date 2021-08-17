import React from 'react';
import TaskItem from './TaskItem'
import ContainerWrap from './UI/ContainerWrap/ContainerWrap'

const TaskTable = () => {
    const tasksList = []
    const keys = Object.keys(localStorage)
    let i = keys.length

    while (i--) {
        keys[i].indexOf('TODO') > -1 && tasksList.push({
            key: keys[i],
            name: localStorage.getItem(keys[i])
        })
    }

    return (
        <ContainerWrap rowAddClasses="my-3">
            {tasksList.map((task, key) =>
                <TaskItem taskName={task.name} taskKey={task.key} key={key} />
            )}
        </ContainerWrap>
    );
};

export default TaskTable;