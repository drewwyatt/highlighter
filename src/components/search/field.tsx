'use client'
import { ChangeEvent, FC, useCallback } from 'react'
import { useSearch } from './context'
import styles from './search.module.css'

const SearchField: FC = () => {
  const [query, setQuery] = useSearch()
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value)
    },
    [setQuery],
  )

  return (
    <input className={styles.searchField} type="text" value={query} onChange={onChange} />
  )
}

export default SearchField
