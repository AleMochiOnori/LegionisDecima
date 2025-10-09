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
                </div>
                <div className="Right-Header-Content">
                    <Link to={`/aboutUs`}>
                        <p>Su di Noi</p>
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