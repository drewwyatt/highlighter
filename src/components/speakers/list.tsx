'use client'
import { FC, useMemo } from 'react'
import { useSearchQuery } from '~/components/search'

import Cell from './cell'
import data from './data'
import styles from './speakers.module.css'

const useVM = () => {
  const query = useSearchQuery()
  return useMemo(
    () =>
      [
        query,
        data.filter(
          speaker =>
            query === '' ||
            speaker.name.toLowerCase().includes(query) ||
            speaker.company.toLowerCase().includes(query) ||
            speaker.title.toLowerCase().includes(query),
        ),
      ] as const,
    [query],
  )
}

const List: FC = () => {
  const [query, speakers] = useVM()
  return (
    <ul className={styles.list}>
      {speakers.map(speaker => (
        <Cell
          company={speaker.company}
          key={speaker.name}
          name={speaker.name}
          query={query}
          title={speaker.title}
        />
      ))}
    </ul>
  )
}

export default List
