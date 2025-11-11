import "./Header.css"
import { Link } from "react-router-dom";
import logoCombat from "../../assets/Logo_Combat.jpg"
import { useState } from "react";
import Hamburger from 'hamburger-react'
const Header = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <div className="Header-Container">
                <div className="Left-Header-Content">
                    <Link to={`/`}>
                        <img className="logoCombat" src={logoCombat} alt="" />
                    </Link>
                    <h2 className="titleHeader">Legionis Decima Torrino</h2>
                </div>
                <div className="Right-Header-Content">
                      <Link to={`/`}>
                        <p>Home</p>
                    </Link>
                    <Link to={`/aboutUs`}>
                        <p>Staff</p>
                    </Link>
                    <Link to={`/courses`}>
                        <p>Orari corsi</p>
                    </Link>
                    
                    <Link to={`/contacts`}>
                        <p>Contatti</p>
                    </Link>
                     <Link to={`/privateLesson`}>
                        <p>Lezione privata</p>
                    </Link>
                    <Link to={`/rating`}>
                        <p>Recensioni</p>
                    </Link>
                    <Link to={`/detail`}>
                        <p>Approdondisci</p>
                    </Link>
                    <div className="logInSession">
                        <Link to={`/Login`}><p>Accedi</p></Link>
                         <p style={{marginLeft : "7px" , marginRight : "7px"}}>/</p>
                        <Link to={`/register`}><p>Registrati</p></Link>
                    </div>
                   
                </div>
                    <div className="hamburger-menu">
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                        
                    </div>
            </div>
            <div className={`mobile-sidebar ${isOpen ? "open" : "whited"}`}>
                <button className="close-sidebar" onClick={() => setOpen(false)}>✕</button>
                <Link to={`/`} onClick={() => setOpen(false)}>Home</Link>
                <Link to={`/aboutUs`} onClick={() => setOpen(false)}>Staff</Link>
                <Link to={`/courses`} onClick={() => setOpen(false)}>Orari corsi</Link>
                <Link to={`/contacts`} onClick={() => setOpen(false)}>Contatti</Link>
                <Link to={`/privateLesson`} onClick={() => setOpen(false)}>Lezione privata</Link>
                <Link to={`/rating`} onClick={() => setOpen(false)}>Recensioni</Link>
                <Link to={`/detail`} onClick={() => setOpen(false)}><p>Approdondisci</p></Link>
                <Link to={`/Login`} onClick={() => setOpen(false)}>Accedi</Link>
                <Link to={`/register`} onClick={() => setOpen(false)}>Registrati</Link>
            </div>
        </>
    )
}; export default Header;