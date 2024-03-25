"use client"

import React, { useState } from 'react'
import { Input } from './ui/input'

const SearchBar = () => {

      const [search, setSearch] = useState("")

  return (
    <>
      <Input
            id=""
            placeholder="Rechercher un service"
            className="w-[87%] border-none"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      />
    </>
  )
}

export default SearchBar
