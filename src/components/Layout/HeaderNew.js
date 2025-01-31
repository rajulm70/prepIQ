import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import "./HeaderNew.css";

const HeaderNew = () => {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHamburger, setIsHamburger] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            if (window.scrollY > 600) {
                setIsHamburger(true);
            } else {
                setIsHamburger(false);
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to logout?")) {
            setAuth({ user: null, token: "" });
            localStorage.removeItem("auth");
            toast.success("Logout Successfully");
            navigate("/login");
        }
    };

    return (
        <div className={`floating-header-container ${isScrolled ? "scrolled" : ""} ${isHamburger ? "hamburger-mode" : ""}`}>
            {isHamburger ? (
                <div className="hamburger-container flex-header">
                    <Link className="navbar-brand logo-nav" to="/" onClick={toggleMenu}>
                        <img src='https://res.cloudinary.com/dnsjdvzdn/image/upload/v1737660601/Screenshot_2025-01-24_005810_enhanced-removebg-preview_ytrzry.png' alt="logo" style={{ width: '100px', height: '40px' }} />
                    </Link>
                    <button className="hamburger-button" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    {isMenuOpen && (
                        <nav className="hamburger-menu">
                            <ul>
                                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                                <li><Link to="/category" onClick={toggleMenu}>Categories</Link></li>
                                <li><Link to="/contact" onClick={toggleMenu}>About</Link></li>
                                {auth?.user ? (
                                    <>
                                        <li>
                                            <Link to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} onClick={toggleMenu}>
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={handleLogout} to="/login">Logout</Link>
                                        </li>
                                        <li>
                                            <span className="username">{auth?.user?.name}</span>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
                                        <li><Link to="/register" onClick={toggleMenu}>Register</Link></li>
                                    </>
                                )}
                            </ul>
                        </nav>
                    )}
                </div>
            ) : (
                <nav className="menu-bar">
                    <ul>
                        <li><Link to="/">Home</Link></li>

                        {/* Category Dropdown */}
                        <li className="dropdown"
                            onMouseEnter={() => setIsCategoryOpen(true)}
                            onMouseLeave={() => setIsCategoryOpen(false)}
                        >
                            <Link to="/category">Categories</Link>
                            {isCategoryOpen && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/category/tech">Interview</Link></li>
                                    <li><Link to="/category/science">Essay Writing</Link></li>
                                    <li><Link to="/category/business">Quiz Generation</Link></li>
                                    <li><Link to="/category/lifestyle">PDF Enhancer</Link></li>
                                    <li><Link to="/category/lifestyle">Task Analyzer</Link></li>
                                </ul>
                            )}
                        </li>

                        <li className="logo-navbar">
                            <Link to="/">
                                <img src='https://res.cloudinary.com/dnsjdvzdn/image/upload/v1737660601/Screenshot_2025-01-24_005810_enhanced-removebg-preview_ytrzry.png' alt="logo" style={{ width: '90px', height: '30px' }} />
                            </Link>
                        </li>

                        {auth?.user ? (
                            <>
                                {/* Profile Dropdown */}
                                <li className="dropdown"
                                    onMouseEnter={() => setIsProfileOpen(true)}
                                    onMouseLeave={() => setIsProfileOpen(false)}
                                >
                                    <span className="username">{auth?.user?.name}</span>
                                    {isProfileOpen && (
                                        <ul className="dropdown-menu">
                                            <li><Link to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>Dashboard</Link></li>
                                            <li><Link to="/superzone">PrepCoins</Link></li>
                                        </ul>
                                    )}
                                </li>

                                <li><Link onClick={handleLogout} to="/login">Logout</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default HeaderNew;
