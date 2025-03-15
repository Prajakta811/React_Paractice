 
import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import Register from './assets/components/Register'
import Login from './assets/components/Login'
import Favourite from './assets/components/Favourite'
import PrivateRouter from './assets/router/PrivateRouter'


function App() {
   

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <PrivateRouter><Home/></PrivateRouter>   } />
        <Route path='/favourite' element={ <PrivateRouter><Favourite/></PrivateRouter> } />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
