import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from "./componentes/NavBar";

function App() {
  

  return (
    <div className="App">
        <NavBar/>
        <div className='conteinerhome'>
          <Outlet/>
        </div>
    </div>
  )
}

export default App
