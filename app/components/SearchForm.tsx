import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react'

const SearchForm = ({query}:{query?:string}) => {
    
  return (
    <Form action="/" scroll={false} className='search-form'>
        <input type="text" defaultValue={query} name="query" placeholder="Search for startups" className='search-input' />
        
        <div className="flax gap-2">
            {query && <SearchFormReset />
            }
        </div>
        
        <button type="submit" className='search-btn text-white'>
            <Search className='size-5'/>
        </button>
    </Form>
  )
}

export default SearchForm