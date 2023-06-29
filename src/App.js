import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import { TaskProvider } from './components/Taskcontext';

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <TaskList></TaskList>
      </TaskProvider>
    </div>
  );
}

export default App;
