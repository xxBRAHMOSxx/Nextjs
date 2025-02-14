import React from 'react'
import Form from 'next/form'

const SearchForm = () => {
    const query = 'text'

    const reset = () => {
        console.log('reset')
    }

  return (
    <Form action="/" scroll={false} className='search-form'>
        <input type="text" defaultValue={query} name="query" placeholder="Search for startups" className='search-input' />
        
        <div className="flax gap-2">
            {query && (
                <button type="reset" onClick={reset}></button>
            )}
        </div>
        
        <button type="submit">Search</button>
    </Form>
  )
}

export default SearchForm