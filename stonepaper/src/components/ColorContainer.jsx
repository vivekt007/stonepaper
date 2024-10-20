import React from "react";
import { useNavigate } from "react-router-dom";
import BlackArrow from "../assets/Icons/Arrow-Right-Black.svg";
import "../styles/ColorContainer.css";

const ColorContainer = ({ colorName, bgColor, shopLink }) => {
    const navigate = useNavigate();

    const handleShopClick = () => {
        navigate(shopLink);
    };

    return (
        <div className="color-container">
            <div
                className="color-display"
                style={{ backgroundColor: bgColor }}
            ></div>
            <h2>{colorName}</h2>
            <button className="color-shop-btn" onClick={handleShopClick}>
                Shop <img src={BlackArrow} alt="arrow" />
            </button>
        </div>
    );
};

export default ColorContainer;
