import './App.css';
import {useState} from 'react'
import TaskTable from './components/TaskTable'
import CreateTask from './components/CreateTask';

function App() {
  const initToDoTasksList = []
  const initDoneTasksList = []
  const keys = Object.keys(localStorage)
  let taskNum = keys.length

  while (taskNum--) {
      const taskData = {
          key: keys[taskNum],
          name: localStorage.getItem(keys[taskNum])
      }
      if ( keys[taskNum].indexOf('TODO') > -1 ) {
        initToDoTasksList.push(taskData)
      } else {
        initDoneTasksList.push(taskData)
      }
  }
  const [toDoTasksList, setToDoTasksList] = useState(initToDoTasksList)
  const [doneTasksList, setDoneTasksList] = useState(initDoneTasksList)


  const createTask = (newTask) => {
      setToDoTasksList([...toDoTasksList, newTask])
  }

  const changeTaskStatus = (thisTask) => {
      setToDoTasksList(toDoTasksList.filter(p => p.key !== thisTask.key))
      setDoneTasksList([...doneTasksList, {...thisTask, key: thisTask.key.replace('TODO', 'DONE')}])
  }

  return (
    <main className="todo_main">
      <CreateTask create={createTask} />
      <TaskTable tableTitle="Tasks in progress" tasksList={toDoTasksList} changeTaskStatus={changeTaskStatus} />
      <hr/><hr/>
      <TaskTable tableTitle="Done Tasks" tasksList={doneTasksList} />
    </main>
  );
}

export default App;
