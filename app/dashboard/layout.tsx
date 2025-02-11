import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
            <h1>dashboard</h1>
        {children}
        </div>
  )
}

export default layout