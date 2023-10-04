import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <nav>
        <ul>
          <a><img src="../images/logo.png" alt="" /></a>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/tvseries">TV Shows</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/latest">New & Popular</Link></li>
          <li><Link to="/mylist">My List</Link></li>
          <li><Link to="/browse">Browse by Languages</Link></li>

        </ul>
      </nav>
    )
}