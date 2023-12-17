import type { FC } from 'react'
import style from './SideContent.module.css'

interface SidebarContentProps {}

const SidebarContent: FC<SidebarContentProps> = () => {
  return (
    <div className={style.container}>
      <header>{import.meta.env.VITE_APP_NAME}</header>
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

export default SidebarContent
