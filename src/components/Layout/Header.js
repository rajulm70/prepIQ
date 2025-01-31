import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

const Header = () => {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility
    const [searchQuery, setSearchQuery] = useState(""); // Search query state

    const handleLogout = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to logout?")) {
            setAuth({
                ...auth,
                user: null,
                token: "",
            });
            localStorage.removeItem("auth");
            toast.success("Logout Successfully");
            navigate("/login");
        }
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Logic for handling the search (can be customized)
        console.log("Search query:", searchQuery);
        // You can also redirect to a search results page if needed
        // navigate(`/search?q=${searchQuery}`);
    };

    return (
        <>
            <style>
                {`
                    .sticky-header {
                        position: sticky;
                        top: 0;
                        z-index: 1000;
                        width: 100%;
                        height: 90px;
                        background-color: #282832; /* Set the background color */
                    }

                    .navbar {
                        background-color: #282832; /* Set the background color */
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }

                    /* Styling for the navbar brand */
                    .navbar-brand {
                        color: white;
                        font-weight: 600;
                        display: flex;
                        align-items: center;
                        background-color: transparent !important;
                    }

                    /* Modern Hamburger Icon */
                    .navbar-toggler {
                        border: none;
                        background: transparent !important;
                        outline: none;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        width: 30px;
                        height: 25px;
                        padding: 0;
                    }

                    .navbar-toggler .bar {
                        width: 30px;
                        height: 4px;
                        background-color: white;
                        border-radius: 5px;
                        transition: all 0.3s ease;
                    }

                    .navbar-toggler.open .bar:nth-child(1) {
                        transform: rotate(45deg) translate(5px, 5px);
                    }

                    .navbar-toggler.open .bar:nth-child(2) {
                        opacity: 0;
                    }

                    .navbar-toggler.open .bar:nth-child(3) {
                        transform: rotate(-45deg) translate(5px, -5px);
                    }

                    /* Style for active link with blue background and border-radius */
                    .nav-link.active {
                        background-color: #7D5D50; /* indigo-600 */
                        color: white;
                        border-radius: 8px;
                    }

                    /* Style for nav-link */
                    .nav-link {
                        color: white !important;
                        padding: 8px 16px;
                        font-weight: 500;
                        transition: background-color 0.3s ease, color 0.3s ease;
                        margin-right: 20px;
                    }

                    /* Search Bar - Centered in the header */
                    .search-bar-wrapper {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex: 1;
                    }

                    .search-bar {
                        display: flex;
                        align-items: center;
                        // border: 1px solid #ddd;
                        padding: 5px 10px;
                        border-radius: 8px;
                        width: 340px;
                    }

                    .search-input {
                        border: none;
                        outline: none;
                        padding: 8px 16px;
                        font-size: 14px;
                        border-radius: 8px;
                        flex: 1;
                    }

                    .search-button {
                        background-color: #7D5D50; /* indigo-600 */
                        color: white;
                        padding: 8px 16px;
                        border-radius: 8px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                        margin-left: 7px;
                    }

                    .search-button:hover {
                        background-color: #4338ca; /* indigo-700 */
                    }

                    /* Dropdown and user styles */
                    .dropdown-menu {
                        background-color: #3f1f45;
                    }

                    .dropdown-item {
                        color: white;
                    }

                    .dropdown-item:hover {
                        background-color: #a4e7d1;
                    }

                    .icon-user {
                        margin-right: 5px;
                    }

                    .navbar-nav .nav-link {
                        color: white !important;
                    }

                    /* Mobile specific CSS for better navigation */
                    @media (max-width: 768px) {
                        .nav-item {
                            margin-bottom: 10px;
                        }

                        .navbar-nav .nav-link {
                            color: white !important;
                            text-align: center;
                        }

                        .search-bar-wrapper {
                            width: 100%;
                        }

                        .search-bar {
                            width: 80%;
                        }
                    }
                `}
            </style>

            <nav className="navbar navbar-expand-lg sticky-header">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            src='https://res.cloudinary.com/dnsjdvzdn/image/upload/v1737660601/Screenshot_2025-01-24_005810_enhanced-removebg-preview_ytrzry.png'
                            alt="logo"
                            style={{ width: '130px', height: '40px', marginRight: '8px', marginLeft: '80px' }}
                        />
                    </Link>
                    <button
                        className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`}
                        type="button"
                        onClick={handleMenuToggle}
                        aria-controls="navbarSupportedContent"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category" className="nav-link">Category</NavLink>
                            </li>
                            {!auth?.user ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/register" className="nav-link">Register</NavLink>
                                    </li>
                                    <li className="nav-item" style={{'marginRight':'170px'}}>
                                        <NavLink to="/login" className="nav-link">Login</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle disable-active"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            isActive={() => false}>
                                            <i className="fa-solid fa-user-tie icon-user"></i>
                                            {auth?.user?.name}
                                        </NavLink>
                                        <div className="dropdown-menu dropdownStyle" aria-labelledby="navbarDropdown">
                                            <li>
                                                <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="dropdown-item dropdownStyle1">Dashboard</NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    onClick={handleLogout}
                                                    to="/login"
                                                    className="dropdown-item dropdownStyle1"
                                                >
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </div>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* Search Bar Centered in the Navbar */}
                    <div className="search-bar-wrapper">
                        <form onSubmit={handleSearch} className="d-flex">
                            <div className="search-bar">
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button type="submit" className="search-button">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
