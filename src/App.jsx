import './App.css'
import MainBody from './components/MainBody.jsx'

function App() {

  return (
    <>
      <div className="app-bar">
        <span className='items active'><a href="#">Home</a></span>
        <span className='items'><a href="#">Shop</a></span>
        <span className='items'><a href="#">FAQ</a></span>
      </div>
      <MainBody />
    </>
  )
}

export default App
