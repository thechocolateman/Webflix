import "./splash.css"
import { useNavigate } from "react-router"


const SignUp = () => {
    
    return(
        <div className="splash">
        <div className="signup__container">
            <h1>Unlimited movies, TV shows, and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form id="action__form" action="#">
                <input id="email__box" type="text" placeholder="Email Address" />
                <button id="submit__btn">Get Started ></button>
            </form>
            
        </div>
    </div>
    )
}
const Splash = () => {
    const navigate = useNavigate()
    return(
        <div className="login__modal">
            <h1>Sign In</h1>
            <form id="login__form" action="#">
                <input type="text" placeholder="Email Address"/>
                <input type="text" placeholder="Password"/>
                <input className="login__btn" type="submit" onClick={()=> navigate("Home")} value={"Sign In"}/>
            </form>
        </div>
    )
}
export default Splash