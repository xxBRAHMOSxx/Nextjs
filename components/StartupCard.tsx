import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { cn, formatDate } from '@/lib/utils'
import { Author, Startup } from '@/sanity/types'
import { Skeleton } from './ui/skeleton'

export type StartupTypeCard = Omit<Startup,"author"> & {author?: Author};

const StartupCard = ({post}:{post:StartupTypeCard }) => {
    const {_createdAt, views, author, _id, description, image, category, title} = post
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
                <img className=' rounded-full' src={author?.image} alt="user"  width={48} height={48}/>
            </Link>
        </div>
        <Link className='hover:underline' href={`/startup/${_id}`}>
            <p className='startup-card_desc'>{description}</p>
            <img src={image} alt="image" className='startup-card_img' />
        </Link>
        <div className='flex-between gap-3 mt-5'>
            <Link className='hover:underline' href={`/?query=${category?.toLowerCase()}`}>
                <p className='text-16-medium'>{category}</p>
            </Link>
            <Button className='startup-card_btn' asChild>
                <Link className='hover:underline' href={`/startup/${_id}`}>
                    Details
                </Link>
            </Button>
        </div>
    </li>
  )
}
export const StartupCardSkeleton = () => (
    <>
      {[0, 1, 2, 3, 4].map((index: number) => (
        <li key={cn("skeleton", index)}>
          <Skeleton className="startup-card_skeleton" />
        </li>
      ))}
    </>
  );

export default StartupCard