import React from 'react'

function Header({changeUser}) {
  const logOutUser=()=>{
      localStorage.setItem('loggedInuser', '');
      // window.location.reload();
      changeUser('');
  }
  return (
  

    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-regular'>Hello  <br />  <span className='font-3xl font-semibold'>ede👋🏻</span> </h1>
        <button onClick={logOutUser} className='px-3 py-1 bg-red-300 text-lg text-gray-800 rounded-md'>Log out</button>
    </div>
  )
}

export default Header