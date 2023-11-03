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
  const [showSide, setShowSide] = useState<boolean>(
    document.body.clientWidth > 768
  )
  const [inTransition, setInTransition] = useState<boolean>(false)

  const slot = parseSlot(children)

  const sideClassNames = [style.side, showSide ? style.show : style.hide]
  if (inTransition) sideClassNames.push(style.inTransition)

  function toggleSide() {
    setInTransition(true)
    setShowSide((state) => !state)
  }
  return (
    <div className={style.container}>
      <div
        className={sideClassNames.join(' ')}
        onTransitionEnd={() => setInTransition(false)}
      >
        <button className={style.toggleButton} onClick={toggleSide} />
        <div>{slot.side}</div>
      </div>
      <div className={style.main}>
        <div>{slot.main}</div>
        <div className={style.overlay} onClick={toggleSide} />
      </div>
    </div>
  )
}

export default Layout
