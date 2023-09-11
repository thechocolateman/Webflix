export default function Navbar(){
    return(
        <nav>
        <ul>
          <a href="#"><img src="../images/logo.png" alt="" /></a>
          <li><a className='active' href="#">Home</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">News & Popular</a></li>
          <li><a href="#">My List</a></li>
          <li><a href="#">Browse by Languages</a></li>
        </ul>
      </nav>
    )
}