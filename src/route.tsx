import { createBrowserRouter } from 'react-router-dom'
import RootPage from './pages/RootPage'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootPage />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
)
