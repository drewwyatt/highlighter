import type { FC } from 'react'
import type { Speaker } from './data'
import styles from './speakers.module.css'

type Props = Speaker & {
  query: string
}

const MaybeTitleAndCompany: FC<Pick<Props, 'title' | 'company' | 'query'>> = ({
  title,
  company,
}) =>
  !!title ? (
    <>
      {title}, {company}
    </>
  ) : (
    <>{company}</>
  )

const Cell: FC<Props> = ({ name, title, company, query }) => (
  <li className={styles.cell}>
    <strong>{name}</strong>
    <MaybeTitleAndCompany title={title} company={company} query={query} />
  </li>
)

export default Cell
