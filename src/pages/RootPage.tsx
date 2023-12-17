import type { FC } from 'react'
import style from './RootPage.module.css'

interface RootPageProps {}

const RootPage: FC<RootPageProps> = () => {
  return (
    <div className={style.container}>
      <header>Root Page</header>
      <main></main>
    </div>
  )
}

export default RootPage
