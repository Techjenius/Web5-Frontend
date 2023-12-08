import "./header.css"
import logo from '../../assets/logo.svg'
const Header = () => {
  return (
    <div className="header">
        <img src={logo} alt="logo" />
        <ul className="navlinks">
            <li>Home</li>
            <li>Portfolio</li>
            <li>About us</li>
            <li>Our Service</li>
        </ul>
        <button className="linear-btn">Get Started</button>
    </div>
  )
}

export default Header