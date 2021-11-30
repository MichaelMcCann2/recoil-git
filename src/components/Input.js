import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { taskListState } from '../Recoil/TaskListState'

export default function Input() {

  const [inputValue, setInputValue] = useState('')
  const setTaskList = useSetRecoilState(taskListState)

  const handleClick = function(){
    setTaskList((oldTaskList) => [...oldTaskList, inputValue])
    setInputValue('')
  }

  const onChange = function(event){
    setInputValue(event.target.value)
  }

  return (
    <div className="input">
      <input type="text" value={inputValue} onChange={(event) => onChange(event)}></input>
      <button onClick={handleClick}>Add Task</button>
    </div>
  )
}