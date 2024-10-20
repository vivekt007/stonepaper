import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ProfileOutline from "../assets/Icons/user_outline.svg";
import ProfileFilled from "../assets/Icons/user_filled.svg";
import CartOutline from "../assets/Icons/cart_outline.svg";
import CartFilled from "../assets/Icons/cart_filled.svg";
import Logo from "../assets/Logo/StonepaperLogoLineTransparent.png";
import "../styles/Header.css";
import "../styles/variables.css";

function Header() {
    const location = useLocation();
    const [hoveredLink, setHoveredLink] = useState(null); // State to track hovered link

    function isActive(path) {
        return location.pathname === path;
    }

    // Inline styles
    const styles = {
        navbar: {
            backgroundColor: "var(--color-snowflake-white)",
            padding: "0px 60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "fixed",
            width: "100%",
            height: "8dvh",
            zIndex: 10,
        },
        logo: {
            width: "140px",
        },
        navList: {
            display: "flex",
            gap: "48px",
        },
        navLink: {
            color: "var(--color-black-tie)",
            textDecoration: "none",
            transition: "color 0.175s ease-in-out",
        },
        activeLink: {
            color: "var(--color-sunset)",
        },
        hoveredLink: {
            color: "var(--color-sunset)",
        },
        navIcon: {
            width: "18px",
            height: "18px",
            transition: "0.175s ease-in-out",
        },
    };

    return (
        <header>
            <nav style={styles.navbar}>
                {/* Logo */}
                <ul style={styles.navList}>
                    <li>
                        <NavLink to="/">
                            <img
                                style={styles.logo}
                                src={Logo}
                                alt="StonePaper Logo"
                            />
                        </NavLink>
                    </li>
                </ul>

                {/* Navigation Links */}
                <ul style={styles.navList}>
                    {["/", "/shop", "/about", "/contact"].map((path) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                end={path === "/"}
                                style={({ isActive }) => ({
                                    ...styles.navLink,
                                    ...(isActive || hoveredLink === path
                                        ? styles.hoveredLink
                                        : {}),
                                })}
                                onMouseEnter={() => setHoveredLink(path)}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                {path === "/"
                                    ? "Home"
                                    : path
                                          .replace("/", "")
                                          .charAt(0)
                                          .toUpperCase() + path.slice(2)}
                            </NavLink>
                        </li>
                    ))}

                    {/* Profile and Cart Icons */}
                    <li>
                        <NavLink to="/profile">
                            <img
                                src={
                                    isActive("/profile")
                                        ? ProfileFilled
                                        : ProfileOutline
                                }
                                alt="Profile"
                                style={styles.navIcon}
                            />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">
                            <img
                                src={
                                    isActive("/cart") ? CartFilled : CartOutline
                                }
                                alt="Cart"
                                style={styles.navIcon}
                            />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
