
import './App.css'
import MyModel from './components/MyModel'

function App() {


  return (
    <>
      <h1 className='text-3xl text-white text-center mt-5 bg-blue-600 py-2'>Varun</h1>
      <MyModel btnText = "Login" />
      <MyModel btnText = "Register" />
    </>
  )
}

export default App
