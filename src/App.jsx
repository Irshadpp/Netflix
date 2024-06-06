import "./index.css"
import {Routes, Route} from 'react-router-dom'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Test from "./pages/Test"

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </>
  )
}

export default App
