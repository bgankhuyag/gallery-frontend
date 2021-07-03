import { Link } from 'react-router-dom'
import './styles.css'

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header-link">Home</Link>
      <Link to="/gallery" className="header-link">Gallery</Link>
      <Link to="/about" className="header-link">About</Link>
      <Link to="/contact" className="header-link">Contact</Link>
    </div>
  )
}

export default Header;
