import React from 'react'

const page = ({params}:{params:{id:string}}) => {
    const {id} = params;
    return (
    <div>Users Profile:{id}</div>
  )
}

export default page