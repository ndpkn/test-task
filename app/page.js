import styles from './page.module.css'
import LoginPage from './login/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <LoginPage/>
    </main>
  )
}
