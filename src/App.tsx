import Layout from './components/Layout'
import DummySidebarContent from './components/DummySidebarContent'

const generateDummyString = (times: number): string =>
  [...Array(times)].map(() => 'DUMMY').join(' ')

function App() {
  return (
    <Layout>
      <template slot="sidebar">
        <DummySidebarContent />
      </template>
      <template slot="content">{generateDummyString(100)}</template>
    </Layout>
  )
}

export default App
