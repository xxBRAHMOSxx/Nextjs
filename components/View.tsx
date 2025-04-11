import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/quries'

const View = async ({id}:{id:string}) => {

    const {views:totalViews} = await client.withConfig({useCdn:false}).fetch(STARTUP_VIEWS_QUERY,{id})

  return (
    <div className='view-container'>
        <div className='absolute -top-2 -right-2'>
        <Ping/>
        </div>
        <p className='view-text'>
            <span className='font-black'>{totalViews<=1 ? (`${totalViews} view`): (`${totalViews} views`)}</span>
        </p>
    </div>
  )
}

export default View