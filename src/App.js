import './App.css';
import Input from './components/Input';
import { taskListState } from './Recoil/TaskListState';
import { useRecoilValue } from 'recoil';
import Task from './components/Task';

function App() {

  const list = useRecoilValue(taskListState)

  console.log(list)

  return (
    <div className="App">
      <button className="themeButton">Change Theme</button>
      <h1 className="title">Todo list V3.0</h1>
      <Input />

      {list.map((item, index) => (
        <Task key={index}/>
      ))}
    </div>
  );
}

export default App;