import Layout from './components/Layout'
import DummySideContent from './components/DummySideContent'
import DummyMainContent from './components/DummyMainContent'

function App() {
  return (
    <Layout>
      <template slot="side">
        <DummySideContent />
      </template>
      <template slot="main">
        <DummyMainContent />
      </template>
    </Layout>
  )
}

export default App
