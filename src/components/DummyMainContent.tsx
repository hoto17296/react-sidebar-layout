import type { FC } from 'react'
import style from './DummyMainContent.module.css'

const DummyMainContent: FC = () => {
  return (
    <div className={style.container}>
      <header>Page Title</header>
      <main></main>
    </div>
  )
}

export default DummyMainContent
