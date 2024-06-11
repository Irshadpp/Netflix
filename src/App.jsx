import "./index.css"
import {Routes, Route} from 'react-router-dom'
// import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Test from "./pages/Test"
import { AuthContextProvider } from "./context/AuthContext"
import { TrailerContextProvider } from './context/TrailerContext'
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <>
    <AuthContextProvider>
    <TrailerContextProvider>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={
          <ProtectedRoute><Profile/></ProtectedRoute>
          }/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
      </TrailerContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
