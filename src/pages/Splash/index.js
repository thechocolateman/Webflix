import "./splash.css"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { getAuth, getRedirectResult, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import "../../init"
import { useSelector, useDispatch } from "react-redux";
import { logInUser } from "../../state/user";
import { useEffect } from "react";
const auth = getAuth();
const provider = new GoogleAuthProvider();

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

    let dispatch = useDispatch();
    const navigate = useNavigate()
    const userState = useSelector(state => state.user)
    
    // if(auth.currentUser){
    //     navigate("/Home")
    // }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if (user){
                const uid = user.uid
                navigate("/Home")
                console.log("UID : ", user)
            }
            else{
                console.log("user logged out")
            }
        })
    },[])
    return(
        <div className="login__modal">
            {console.log("CURRENT ", auth.user)}
            <h1>Sign In</h1>
            <form id="login__form" action="#">
                <input type="text" placeholder="Email Address"/>

                <input type="text" placeholder="Password"/>
                <Link to="home">Home</Link>
                <input className="login__btn" type="submit" onClick={()=> navigate("/Home")} value={"Sign In"}/>
                <input className="login__btn" type="submit" onClick={(e)=> {
                    e.preventDefault()
                    signInWithRedirect(auth, provider)
                    getRedirectResult(auth)
                        .then((result) => {
                            // This gives you a Google Access Token. You can use it to access Google APIs.
                            const credential = GoogleAuthProvider.credentialFromResult(result);
                            const token = credential.accessToken;

                            // The signed-in user info.
                            const user = result.user;
                            // IdP data available using getAdditionalUserInfo(result)
                            // ...
                            dispatch(logInUser({"id":"",password:"123456"}))
                            console.log("USER IS ", user)
                        }).catch((error) => {
                            // Handle Errors here.
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            // The email of the user's account used.
                            // const email = error.customData.email;
                            // The AuthCredential type that was used.
                            const credential = GoogleAuthProvider.credentialFromError(error);
                            // ...
                            console.log(error)
                        });
                }} value={"Sign in with Google"}/>
            </form>
        </div>
    )
}
export default Splash