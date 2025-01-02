import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard({ changeUser, data }) {
  return (
    <div className='p-7 h-screen w-screen bg-[#1C1C1C]'>
      <Header changeUser={changeUser} data={data} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard