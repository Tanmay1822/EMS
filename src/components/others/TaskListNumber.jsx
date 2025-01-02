import React from 'react'

function TaskListNumber({data}) {
  return (
    <div className='pr-7 mt-10 w-screen flex justify-between gap-5 '>
        <div className='rounded-xl w-[40%] px-6 py-9  bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-semibold text-gray-500'>New Task</h3>
        </div>
        <div className='rounded-xl w-[40%] px-6 py-9  bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-semibold text-gray-500'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[40%] px-6 py-9  bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-semibold text-gray-500'>Accepted Task</h3>
        </div>
        <div className='rounded-xl w-[40%] px-6 py-9  bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-semibold text-gray-500'>Failed Task</h3>
        </div>

        
    </div>
  )
}

export default TaskListNumber