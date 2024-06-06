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
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <>
    <AuthContextProvider>
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
      </AuthContextProvider>
    </>
  )
}

export default App
