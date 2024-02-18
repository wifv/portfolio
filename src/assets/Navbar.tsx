import './navbar.css'

const Navbar = () => {
  return (
    <div className="container">
      <nav className="nav">
          <a className="logo" href='/'>My Portfolio</a>
          <ul>
              <li className="nav-item"><a href='#about'>About</a></li>
              <li className="nav-item"><a href='#skills'>Skills</a></li>
              {/* <li className="nav-item"><a href='#'>Service</a></li> */}
              <li className="nav-item"><a href='#projects'>Projects</a></li>
              <li className="nav-item"><a href='#contact'>Contact</a></li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
