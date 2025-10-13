import EmailForm from "../../Components/EmailForm/EmailForm";
import "./Contacts.css"
const Contacts = () => {
    return (
        <>
        <div className="Container">
            <div className="Mail">
                <EmailForm />
            </div>
        
            <div>
                <p style={{color : "black"}}>Seguici Anche Sui Social</p>
            </div>
        </div>
        </>
    )
};export default Contacts;