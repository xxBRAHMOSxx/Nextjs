import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { formatDate } from '@/lib/utils'
import { Author, Startup } from '@/sanity/types'

export type StartupTypeCard = Omit<Startup,"author"> & {author?: Author};

const StartupCard = ({post}:{post:StartupTypeCard }) => {
    const {_createdAt, views, author, _id, description, image, catagory, title} = post
  return (
    <li className='startup-card group'>
        <div className='flex-between'>
            <p className='startup_card_date'>
                {formatDate(_createdAt)}
            </p>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-primary' />
                <span className='tect-16-medium'>{views}</span>
            </div>
        </div>
        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link className='hover:underline' href={`/user/${author?._id}`}>
                    <p className='text-16-medium line-clamp-1'>{author?.name}</p>
                </Link>
                <Link className='hover:underline' href={`/startup/${_id}`}>
                    <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
                </Link>
            </div>
            <Link  href={`/user/${author?._id}`}>
                <img className=' rounded-full' src="./avatar.jpg" alt="user"  width={48} height={48}/>
            </Link>
        </div>
        <Link className='hover:underline' href={`/startup/${_id}`}>
            <p className='startup-card_desc'>{description}</p>
            <img src={image} alt="image" className='startup-card_img' />
        </Link>
        <div className='flex-between gap-3 mt-5'>
            <Link className='hover:underline' href={`/query=${catagory?.toLowerCase()}`}>
                <p className='text-16-medium'>{catagory}</p>
            </Link>
            <Button className='startup-card_btn' asChild>
                <Link className='hover:underline' href={`/startup/${_id}`}>
                    description
                </Link>
            </Button>
        </div>
    </li>
  )
}

export default StartupCard