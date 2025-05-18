import { Input } from '@heroui/react'
import React from 'react'

const SearchInput = () => {
  return (
    <div className="md:col-span-3 order-1  md:order-none">
        <Input
          placeholder=" جستجو کنید ..."
          startContent={
            // <Search className="text-default-400 pointer-events-none flex-shrink-0" />
            <img src='/Frame 81.svg' className="w-10 h-10 relative -right-4"  />
          }
          className="w-full py-2 "
        />
        
      </div>
  )
}

export default SearchInput
