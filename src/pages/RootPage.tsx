import type { FC } from 'react'
import style from './RootPage.module.css'
import MainContentContainer from '../components/MainContentContainer'

interface RootPageProps {}

const RootPage: FC<RootPageProps> = () => {
  return (
    <MainContentContainer className={style.rootPage} pageTitle="Root Page">
      DUMMY
    </MainContentContainer>
  )
}

export default RootPage
