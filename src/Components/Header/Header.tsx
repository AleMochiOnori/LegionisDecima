import "./Header.css"
import { Link } from "react-router-dom";
import logoCombat from "../../assets/Logo_Combat.jpg"
const Header = () => {
    return (
        <>
            <div className="Header-Container">
                <div className="Left-Header-Content">
                    <Link to={`/`}>
                        <img className="logoCombat" src={logoCombat} alt="" />
                    </Link>
                    <h2>Legionis Decima Torrino</h2>
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
                    <div className="logInSession">
                        <Link to={`/Login`}><p>Accedi</p></Link>
                         <p style={{marginLeft : "7px" , marginRight : "7px"}}>/</p>
                        <Link to={`/register`}><p>Registrati</p></Link>
                    </div>

                </div>
                
            </div>



        </>
    )
}; export default Header;