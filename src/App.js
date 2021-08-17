import './App.css';
import TaskTable from './components/TaskTable'
import CreateTask from './components/CreateTask';

function App() {
  return (
    <main className="todo_main">
      <TaskTable/>
      <CreateTask/>
    </main>
  );
}

export default App;
