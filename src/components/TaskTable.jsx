import React from 'react';
import TaskItem from './TaskItem'
import ContainerWrap from './hoc/ContainerWrap/ContainerWrap'

const TaskTable = ({tableTitle, tasksList, changeTaskStatus}) => {
    return (
        <ContainerWrap rowAddClasses="my-3">
            <h2 className="h3 text-center">{tableTitle}</h2>
            {tasksList.map((task, key) =>
                <TaskItem taskName={task.name} taskKey={task.key} key={key} changeTaskStatus={changeTaskStatus}/>
            )}
        </ContainerWrap>
    );
};

export default TaskTable;