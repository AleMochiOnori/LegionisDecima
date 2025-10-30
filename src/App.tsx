import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./Components/Header/Header"
import Home from './Pages/Home/Home'
import AboutUs from "./Pages/AboutUs/AboutUs"
import Contacts from "../src/Pages/Contacts/Contacts" // Crea questi componenti
import Login from "./Pages/LogIn/LogIn"
import Register from "./Pages/Register/Register"
import Footer from './Components/Footer/Footer'
import Courses from './Pages/Courses/Courses'
import ScrollToTop from './utils/ScrollToTop'
import PrivateLesson from './Pages/PrivateLesson/PrivateLesson'
import Rating from './Pages/Ratings/Rating'



function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className='main-scaled'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/privateLesson" element={<PrivateLesson />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      <Footer />
      </div>
    </>
  )
}

export default App