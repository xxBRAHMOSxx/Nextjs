import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const StartupCard = ({post}:{post:StartupTypeCard }) => {
    const {_createdAt, views, author:{_id:authorId,name}, _id, description, image, catagory, title} = post
  return (
    <li className='startup-card group'>
        <div className='flex-between'>
            <p className='startup_card_date'>
                {_createdAt}
            </p>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-primary' />
                <span className='tect-16-medium'>{views}</span>
            </div>
        </div>
        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/user/${authorId}`}>
                    <p className='text-16-medium line-clamp-1'>{name}</p>
                </Link>
                <Link href={`/startup/${_id}`}>
                    <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
                </Link>
            </div>
            <Link href={`/user/${authorId}`}>
                <img className='rounded-full' src="https://placehold.co/48x48" alt="user"  width={48} height={48}/>
            </Link>
        </div>
        <Link href={`/startup/${_id}`}>
            <p className='startup-card_desc'>{description}</p>
            <img src={image} alt="image" className='startup-card_img' />
        </Link>
    </li>
  )
}

export default StartupCard