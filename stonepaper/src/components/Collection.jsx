import React, { useState } from "react";
import arrowIcon from "../assets/Icons/Arrow-Right-Black.svg";
import img1 from "../assets/BackgroundImages/Placeholder1.png";
import img2 from "../assets/BackgroundImages/Placeholder1.png";
import img3 from "../assets/BackgroundImages/Placeholder1.png";
import img4 from "../assets/BackgroundImages/Placeholder1.png";
import "../styles/Collection.css";

const Collection = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const collections = [
        { name: "Shirts", image: img1 },
        { name: "Pants", image: img2 },
        { name: "Polo", image: img3 },
        { name: "T-shirts", image: img4 },
    ];

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    return (
        <div className="collection-section">
            <ul className="collection-list">
                {collections.map((collection, index) => (
                    <li key={index} className="collection-item">
                        <div
                            className="collection-link"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span>{collection.name}</span>
                            <img src={arrowIcon} alt="Arrow" height="25" />
                            {hoverIndex === index && (
                                <div className="hover-reveal">
                                    <img
                                        src={collection.image}
                                        alt={collection.name}
                                        className="hover-image"
                                    />
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Collection;
