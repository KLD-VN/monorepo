import Button from './components/atoms/Button'
import '@/sass/index.scss'

function App() {
  return (
    <div className="App">
      <Button label={'testing'} variant="primary" loading={true} onClick={() => console.log('okie')}/>
    </div>
  )
}

export default App
