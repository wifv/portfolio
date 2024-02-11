import './navbar.css'

const Navbar = () => {
  return (
    <div className="container">
      <nav className="nav">
          <a className="logo" href='/'>My Portfolio</a>
          <ul>
              <li className="nav-item"><a href='#'>About</a></li>
              <li className="nav-item"><a href='#'>Skills</a></li>
              <li className="nav-item"><a href='#'>Service</a></li>
              <li className="nav-item"><a href='#'>Projects</a></li>
              <li className="nav-item"><a href='#'>Contact</a></li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
