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
import Detail from './Pages/Detail/Detail'
import ThailandTrip from './Pages/Detail/ThailandTrip/ThailandTrip'
import KickBoxing from './Pages/Detail/Kick/KickBoxing'
import AtleticTraining from './Pages/Detail/Atletic/AtleticTraining'
import Boxe from './Pages/Detail/Boxe/Boxe'
import MaryArticle from "./Pages/Detail/Articles/MaryArticle"
import GiuseppeArticle from './Pages/Detail/Articles/GiuseppeArticle'
import CaterinaArticle from './Pages/Detail/Articles/CaterinaArticle'
import FrancescoArticle from './Pages/Detail/Articles/FrancescoArticle'
import GiacomoArticle from './Pages/Detail/Articles/GiacomoArticle'


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
          <Route path="/detail" element={<Detail />} />
          <Route path="/viaggio-thailandia" element={<ThailandTrip />} />
          <Route path="/kick-muay-thai" element={<KickBoxing />} />
          <Route path="/boxe" element={<Boxe />} />
          <Route path="/atleticTraining" element={<AtleticTraining />} />
          <Route path="/articoli/alimentazione-per-le-arti-marziali"  element={<MaryArticle />}/>
          <Route path="/articoli/allenamento-funzionale" element={<GiuseppeArticle />}/>
          <Route path="/articoli/gym-boxe-per-donne" element={<CaterinaArticle />}/>
          <Route path="/articoli/sport-da-combattimento-per-giovani" element={<FrancescoArticle />}/>
          <Route path="/articoli/riflessi-condizionati" element={<GiacomoArticle />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      <Footer />
      </div>
    </>
  )
}

export default App