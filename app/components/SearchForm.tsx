import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset'

const SearchForm = () => {
    const query = 'text'

   

  return (
    <Form action="/" scroll={false} className='search-form'>
        <input type="text" defaultValue={query} name="query" placeholder="Search for startups" className='search-input' />
        
        <div className="flax gap-2">
            {query && <SearchFormReset />
            }
        </div>
        
        <button type="submit" className='search-btn text-white'>S</button>
    </Form>
  )
}

export default SearchForm