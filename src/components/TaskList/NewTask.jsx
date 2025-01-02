import React from 'react'

function NewTask({data}) {
  return (
    <div className="h-full w-[300px] bg-blue-700 rounded-xl flex-shrink-0 p-3">
    <div className="flex justify-between items-center">
      <h2 className="bg-red-400 px-3 py-1 text-sm rounded-md">{data.category}</h2>
      <h4>{data.taskDate}</h4>
    </div>
    <h2 className="text-3xl font-semibold mt-5">{data.taskTitle}</h2>
    <p className="mt-2 text-sm">
    {data.taskDescription}
    </p>
    <div className="flex justify-center mt-4 ">
        <button className="px-3 py-1 rounded bg-green-600 text-sm font-semibold">
        Accept Task!
        </button>
      </div>
  </div>
  )
}

export default NewTask