import {NavLink} from 'react-router-dom';
import {useState, useContext} from 'react';
import {
    FaUser,
    FaChevronDown,
    FaChevronUp,
    FaTimes,
    FaChartArea,
    FaCog,
    FaQuestionCircle,
    FaSignOutAlt
} from 'react-icons/fa';

import logo from '../assets/images/logo.webp';
import profile from '../assets/images/profile.jpg';
import {ApiDataContext} from "../contexts/ApiDataContext.jsx";

const Navbar = () => {
    const {apiData} = useContext(ApiDataContext)

    console.log(apiData)

    const [activeLink, setActiveLink] = useState('');
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

    // Toggles the mega menu for 'Services' and collapse when the button is pressed again
    const toggleMegaMenu = () => {
        setActiveLink(activeLink === 'faculties' ? '' : 'faculties');
    };

    // Toggle the profile menu
    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen);
    };

    // Apply active styles and close the mega menu for other links
    const handleNavLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    // Determine the class based on whether the link is active or not
    const linkClass = (linkName) =>
        activeLink === linkName
            ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
            : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';


    return (
        <nav className='bg-indigo-500 border-b border-slate-500 transition-all duration-300 ease-linear'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-2'>
                <div className='flex items-center justify-between' style={{minHeight: '5rem'}}>

                    <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'
                             onClick={() => handleNavLinkClick('home')}>
                        <img className='h-10 w-auto rounded-3xl' src={logo} alt='SST'/>
                        <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                            SST
                        </span>
                    </NavLink>
                    <div className='md:mr-auto md:ml-4'>
                        <div className='flex space-x-2'>
                            <NavLink to='/' className={linkClass('home')} onClick={() => handleNavLinkClick('home')}>
                                Home
                            </NavLink>
                            {/* Toggle 'Services' menu and clear other active states */}
                            <button onClick={toggleMegaMenu} className={linkClass('faculties')}>
                                <div className="flex flex-row items-center">
                                    <span>Faculties</span> {activeLink === 'faculties'
                                    ? <FaChevronUp className="ml-1"/> :
                                    <FaChevronDown className="ml-1"/>
                                }
                                </div>
                            </button>
                            <NavLink to='/about' className={linkClass('about')}
                                     onClick={() => handleNavLinkClick('about')}>
                                About
                            </NavLink>
                            <NavLink to='/contact' className={linkClass('contact')}
                                     onClick={() => handleNavLinkClick('contact')}>
                                Contact
                            </NavLink>
                        </div>
                    </div>
                    <div className='md:ml-auto md:mr-1'>
                        <div className="flex flex-row item-center justify-between gap-3">
                            <div className="relative w-full">
                                <input
                                    type="search"
                                    id="location-search"
                                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg focus:outline-none focus:ring-0" // Removed border and added focus outline
                                    placeholder="Search"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800" // Added dark border
                                >
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 20 20">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>

                            <div className='flex space-x-2 text-white hover:bg-black rounded-md px-3 py-2'>
                                <button onClick={toggleProfileMenu}
                                        className="flex flex-row items-center focus:outline-none">
                                    <div className="flex flex-row items-center space-x-2">
                                        <FaUser/><span className="hidden md:block">Profile</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Services mega menu */}
                {activeLink === 'faculties' && apiData && Array.isArray(apiData.allFaculties) && (
                    // <div className='bg-white shadow-md p-4 mb-4'>
                    //     <div className='grid grid-cols-3 gap-4'>
                    //         {apiData.allFaculties.map((faculty, index) => (
                    //             <div key={index} className="text-center">
                    //                 <img src={faculty.imageUrl} alt={faculty.name} className="mx-auto" style={{ width: '300px', height: '100px' }} />
                    //                 <div>{faculty.name}</div>
                    //             </div>
                    //         ))}
                    //     </div>
                    // </div>

                    <div className='bg-indigo-500 shadow-md p-0 mb-4'>
                        <div className='grid grid-cols-3 gap-4'>
                            {apiData.allFaculties.map((faculty, index) => (
                                <div key={index} className="text-center">
                                    <img src={faculty.imageUrl} alt={faculty.name} className="mx-auto"
                                         style={{width: '300px', height: '100px'}}/>
                                    <div>{faculty.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                )}

                {/* Profile off-canvas menu */}
                {isProfileMenuOpen && (
                    <div className='fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50'>
                        <div className='bg-white p-4 h-full w-64 flex flex-col space-x-3 space-y-3'>
                            <div className="flex flex-row items-center justify-between">
                                <img className="h-10 w-auto rounded-3xl" src={profile} alt="SST"/>
                                <h5>Arjun Thapa Magar</h5>
                                <button className="text-gray-600 focus:outline-none" onClick={toggleProfileMenu}>
                                    <FaTimes/>
                                </button>
                            </div>
                            <div>
                                <NavLink to='/dashboard'
                                         className='block text-black hover:bg-gray-100 py-2 px-4 rounded-3xl'
                                         activeClassName="bg-black text-white" onClick={toggleProfileMenu}>
                                    <div className="flex flex-row items-center space-x-2">
                                        <FaChartArea/><span >Dashboard</span>
                                    </div>
                                </NavLink>
                                <NavLink to='/profile'
                                         className='block text-black hover:bg-gray-100 py-2 px-4 rounded-3xl'
                                         activeClassName="bg-black text-white" onClick={toggleProfileMenu}>
                                    <div className="flex flex-row items-center space-x-2">
                                        <FaUser/><span >View Profile</span>
                                    </div>
                                </NavLink>
                                <NavLink to='/settings'
                                         className='block text-black hover:bg-gray-100 py-2 px-4 rounded-3xl'
                                         activeClassName="bg-black text-white" onClick={toggleProfileMenu}>
                                    <div className="flex flex-row items-center space-x-2">
                                        <FaCog/><span >Settings</span>
                                    </div>
                                </NavLink>
                                <NavLink to='/Help' className='block text-black hover:bg-gray-100 py-2 px-4 rounded-3xl'
                                         activeClassName="bg-black text-white" onClick={toggleProfileMenu}>
                                    <div className="flex flex-row items-center space-x-2">
                                        <FaQuestionCircle/><span >Help</span>
                                    </div>
                                </NavLink>
                                <NavLink to='/logout'
                                         className='block text-black hover:bg-gray-100 py-2 px-4 rounded-3xl'
                                         activeClassName="bg-black text-white" onClick={toggleProfileMenu}>
                                    <div className="flex flex-row items-center space-x-2">
                                        <FaSignOutAlt/><span >Logout</span>
                                    </div>
                                </NavLink>

                            </div>

                        </div>
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;
