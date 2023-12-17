import { useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import style from './MainContentContainer.module.css'

interface MainContentContainerProps {
  children: ReactNode
  pageTitle: string
  className?: string
}

const MainContentContainer: FC<MainContentContainerProps> = ({
  children,
  pageTitle,
  className,
}) => {
  useEffect(() => {
    document.title = `${pageTitle} | ${import.meta.env.VITE_APP_NAME}`
    return () => {}
  }, [pageTitle])

  return (
    <div className={style.container}>
      <header>{pageTitle}</header>
      <main className={className}>{children}</main>
    </div>
  )
}

export default MainContentContainer
