export default function Navbar(){
    return(
        <nav>
        <ul>
          <a><img src="../images/logo.png" alt="" /></a>
          <li><a className='active'>Home</a></li>
          <li><a>TV Shows</a></li>
          <li><a>Movies</a></li>
          <li><a>News & Popular</a></li>
          <li><a>My List</a></li>
          <li><a>Browse by Languages</a></li>
        </ul>
      </nav>
    )
}