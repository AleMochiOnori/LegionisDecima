import "./Header.css"
import { Link } from "react-router-dom";
import logoCombat from "../../assets/Logo_Combat.jpg"
import { useState, useEffect } from "react";
import Hamburger from 'hamburger-react'

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

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
                      <Link className="nav-link" to={`/`}>
                        <p>Home</p>
                    </Link>
                    <Link className="nav-link" to={`/aboutUs`}>
                        <p>Staff</p>
                    </Link>
                    <Link className="nav-link" to={`/courses`}>
                        <p>Orari corsi</p>
                    </Link>

                    <Link className="nav-link" to={`/contacts`}>
                        <p>Contatti</p>
                    </Link>
                    <Link className="nav-link" to={`/privateLesson`}>
                        <p>Lezione privata</p>
                    </Link>
                    <Link className="nav-link" to={`/rating`}>
                        <p>Recensioni</p>
                    </Link>
                    <Link className="nav-link" to={`/detail`}>
                        <p>Approfondisci</p>
                    </Link>
                    <div className="logInSession">
                        <Link className="nav-link" to={`/Login`}><p>Accedi</p></Link>
                         <p style={{marginLeft : "7px" , marginRight : "7px"}}>/</p>
                        <Link className="nav-link" to={`/register`}><p>Registrati</p></Link>
                    </div>
                   
                </div>
                    <div className="hamburger-menu">
                        {isMounted ? <Hamburger toggled={isOpen} toggle={setOpen} /> : <div style={{width: '40px', height: '40px'}} />}
                        
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
                <div className="marginLinkDetail">
                    <Link to={`/detail`} onClick={() => setOpen(false)}><p>Approdondisci</p></Link>
                </div>
                <Link to={`/Login`} onClick={() => setOpen(false)}>Accedi</Link>
                <Link to={`/register`} onClick={() => setOpen(false)}>Registrati</Link>
            </div>
        </>
    )
}; export default Header;