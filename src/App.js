import './App.css';
import Input from './components/Input';
import { taskListState } from './Recoil/TaskListState';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Task from './components/Task';
import { themeState } from './Recoil/ThemeState'

function App() {

  const list = useRecoilValue(taskListState)
  const theme = useRecoilValue(themeState)
  const setThemeState = useSetRecoilState(themeState)

  const handleClick = function(){
    if (theme === 'light') setThemeState('dark')
    else setThemeState('light')
  }

  return (
    <div className={`App ${theme === 'dark' ? 'dark' : ''}`}>
      <button className="themeButton" onClick={handleClick}>Change Theme</button>
      <h1 className="title">Todo list</h1>
      <Input />

      {list.map((item, index) => (
        <Task key={index} item={item}/>
      ))}
    </div>
  );
}

export default App;