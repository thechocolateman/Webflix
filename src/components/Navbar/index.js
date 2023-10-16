import { Link } from "react-router-dom"
import { getAuth } from "firebase/auth"

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
            <div className="right">
              <li>Search</li>
              <div class="dropdown">
                <span>Account</span>
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