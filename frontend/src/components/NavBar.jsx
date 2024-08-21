import { Link } from 'react-router-dom';
import Icon from '../assets/dog.png'
import GithubIcon from '../assets/github-mark.png'
import LinkedInIcon from '../assets/linkedin-logo.png'
import '../styles/NavBar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src={Icon} className="logo" alt="icon"/>
                    <p className='logo-title'>mewwoof</p>
                </Link>

            </div>
            <div className="navbar-right">
                <Link to={'/logout'}>Logout</Link>
                <a href='https://www.linkedin.com/in/queen-belle-d-118b7859/' alt="linkedin" rel="noreferrer" target="_blank"><img src={LinkedInIcon} className="icon" alt="icon"/></a>
                <a href='https://github.com/cubeydice/mewwoof' alt="github" rel="noreferrer" target="_blank"><img src={GithubIcon} className="icon" alt="icon"/></a>
            </div>
        </nav>
    );
};

export default Navbar;