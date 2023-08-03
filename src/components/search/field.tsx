'use client'
import { ChangeEvent, FC, useCallback } from 'react'
import { useSearch } from './context'

const SearchField: FC = () => {
  const [query, setQuery] = useSearch()
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value)
    },
    [setQuery],
  )

  return <input type="text" value={query} onChange={onChange} />
}

export default SearchField
