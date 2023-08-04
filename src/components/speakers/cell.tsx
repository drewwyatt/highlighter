import type { FC } from 'react'
import Highlighter from '~/lib'
import type { Speaker } from './data'
import styles from './speakers.module.css'

type Props = Speaker & {
  query: string
}

const toString = (title: string, company: string) =>
  !!title ? `${title}, ${company}` : company

const Cell: FC<Props> = ({ name, title, company, query }) => (
  <li className={styles.cell}>
    <strong>
      <Highlighter pattern={query}>{name}</Highlighter>
    </strong>
    <p>
      <Highlighter pattern={query}>{toString(title, company)}</Highlighter>
    </p>
  </li>
)

export default Cell
