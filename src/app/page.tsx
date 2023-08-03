import { Search, Speakers } from '~/components'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.headline}>👋</h1>
      <section className={styles.center}>
        <Search.Provider>
          <Search.Field />
          <Speakers />
        </Search.Provider>
      </section>
    </main>
  )
}
