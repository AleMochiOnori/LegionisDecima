import EmailForm from "../../Components/EmailForm/EmailForm";
import "./Contacts.css"
import Instagram from "../../assets/instagram-svgrepo-com.svg"
import Youtube from "../../assets/youtube-svgrepo-com.png"
import Facebook from "../../assets/facebook-svgrepo-com.png"
 const Contacts = () => {
    return (
        <>
        <div className="Container">
            <div className="Mail">
                <EmailForm />
            </div>

            <div>
                <div className="Email">
                    <h2 style={{color : "black" , fontSize : "2rem" , fontWeight : "600"}}>Email</h2>
                    <p style={{color : "black" , fontSize : "1.2rem"}}>legionisdecimatorrino@gmail.com</p>
                </div>

                <p style={{color : "black" , fontSize : "2rem" , fontWeight : "600"}}>Seguici Anche Sui Social</p>
                <div className="SocialIcons">
                    <img className="instaSvg" src={Instagram} alt="" />
                    <img className="youtubeSvg" src={Youtube} alt="" />
                    <img className="faceBook" src={Facebook} alt="" />
                </div>
            </div>
        </div>
        </>
    )
};export default Contacts;