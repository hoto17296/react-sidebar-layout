import { useState } from 'react'
import type { FC, ReactElement, ReactNode } from 'react'
import style from './Layout.module.css'

function parseSlot(children: ReactElement[]): { [key: string]: ReactNode } {
  const slot: { [key: string]: ReactNode } = {}
  children.forEach((child) => {
    if (child.type === 'template' && child.props.slot) {
      slot[child.props.slot] = child.props.children
    }
  })
  return slot
}

interface LayoutProps {
  children: ReactElement[]
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(
    document.body.clientWidth > 768
  )
  const [inTransition, setInTransition] = useState<boolean>(false)

  const slot = parseSlot(children)

  const sidebarClassNames = [
    style.sidebar,
    showSidebar ? style.show : style.hide,
  ]
  if (inTransition) sidebarClassNames.push(style.inTransition)

  function toggleSidebar() {
    setInTransition(true)
    setShowSidebar((state) => !state)
  }
  return (
    <div className={style.container}>
      <div
        className={sidebarClassNames.join(' ')}
        onTransitionEnd={() => setInTransition(false)}
      >
        <button className={style.toggleButton} onClick={toggleSidebar} />
        <div>{slot.sidebar}</div>
      </div>
      <div className={style.content}>
        <div>{slot.content}</div>
        <div className={style.overlay} onClick={toggleSidebar} />
      </div>
    </div>
  )
}

export default Layout
