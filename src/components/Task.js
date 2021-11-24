import React from 'react'
import { themeState } from '../Recoil/ThemeState'
import { taskListState } from '../Recoil/TaskListState'
import { useRecoilValue, useRecoilState } from 'recoil'

export default function Task({item}) {

  const theme = useRecoilValue(themeState)
  const [taskList, setTaskList] = useRecoilState(taskListState)

  const handleClick = function(){
    setTaskList(taskList.filter(task => task !== item))
  }

  return (
    <div className={`listItem ${theme === 'dark' ? 'whiteBorder' : ''}`}>
      <p>{item}</p>
      <button onClick={handleClick}>Remove</button>
    </div>
  )
}
