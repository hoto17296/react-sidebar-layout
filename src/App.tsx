import Layout from './components/Layout'

const generateDummyString = (times: number): string =>
  [...Array(times)].map(() => 'DUMMY').join(' ')

function App() {
  return (
    <Layout>
      <template slot="sidebar">{generateDummyString(10)}</template>
      <template slot="content">{generateDummyString(100)}</template>
    </Layout>
  )
}

export default App
