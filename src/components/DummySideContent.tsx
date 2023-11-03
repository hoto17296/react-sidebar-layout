import type { FC } from 'react'
import style from './DummySideContent.module.css'

const DummySidebarContent: FC = () => {
  return (
    <div className={style.container}>
      <header>React Sidebar Layout</header>
      <ul>
        {[...Array(20)].map(() => (
          <li>
            <a href="#">DUMMY</a>
          </li>
        ))}
      </ul>
      <footer>
        <div className={style.userIcon} />
        <div className={style.userName}>Dummy User</div>
      </footer>
    </div>
  )
}

export default DummySidebarContent
