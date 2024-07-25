import { NavLink } from 'react-router-dom'
import logo from '../assets/images/resume-genius-logo.svg'


const Navbar = () => {
    // const linkClass = ({ isActive }: { isActive: boolean }) => isActive ?
    //     'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' :
    //     'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

    return (
        <header className='site-header'>
            <div className="container">
                <div className="logo-area">
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="Site Logo"
                        />
                        <span className="a"
                        >cvcreator</span>
                    </NavLink>
                </div>
                <div className="navigation-area">
                    <nav>
                        <NavLink to="/">
                            Resumes Home
                        </NavLink>
                        <NavLink to="/jobs">
                            Resources
                        </NavLink>
                        <NavLink to="/add-job">
                            Build My Resume
                        </NavLink>
                        <NavLink to="/add-job">
                            Login
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Navbar