import { Link } from "react-router-dom"
import { getAuth } from "firebase/auth"
import Icon from "@mdi/react"
import { mdiMagnify, mdiAccountTie } from '@mdi/js';
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
export default function Navbar(){
  const auth = getAuth()
  const navigate = useNavigate();
    return(
        <nav>
          <ul>
            <div className="left">
              <a><img src="../images/logo.png" alt="" /></a>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/tvseries">TV Shows</Link></li>
              <li><Link to="/movies">Movies</Link></li>
              <li><Link to="/latest">New & Popular</Link></li>
              <li><Link to="/mylist">My List</Link></li>
            </div>
            <div id="navbar-right" className="right">
              <li>
                <Icon path={mdiMagnify} color="white" size={1.4} onClick={()=>console.log("clicked")}/>
              </li>
              <div id="profile-id" class="dropdown">
                <span><Icon path={mdiAccountTie} color="white" size={1.4} onClick={()=>console.log("clicked")}/></span>
                <div class="dropdown-content">
                  <li>
                    <a href="#" onClick={()=>{
                      signOut(auth).then(()=>{
                        navigate("/splash")
                      })
                    }}><Link to="/splash">Sign out</Link></a>
                  </li>
                </div>
              </div>
            </div>
            
        </ul>
      </nav>
    )
}