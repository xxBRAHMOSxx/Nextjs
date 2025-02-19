import React from 'react'

const loading = () => {
  return (
    <div className=" flex justify-center items-center mt-20 pt-60 ">
    <div className=" absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500">
    <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" alt='loading'  className="rounded-full h-28 w-28"/>
    </div>
</div>
  )
}

export default loading