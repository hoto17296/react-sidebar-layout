import { RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import SideContent from './components/SideContent'
import { router } from './route'

function App() {
  return (
    <Layout>
      <template slot="side">
        <SideContent />
      </template>
      <template slot="main">
        <RouterProvider router={router} />
      </template>
    </Layout>
  )
}

export default App
