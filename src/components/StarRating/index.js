import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

export default function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (CurrentIndex) => {
        setRating(CurrentIndex);
    };

    const handleMouseEnter = (CurrentIndex) => {
        setHover(CurrentIndex);
    };

    const handleMouseLeave = () => {
        setHover(0);
    };

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1;
                    return (
                        <FaStar
                            
                            key={index}
                            className={index <= (hover || rating) ? 'active' : 'inactive'}
                            onClick={() => handleClick(index)}
                            onMouseOver={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            size={40}
                        />
                    );
                })
            }
        </div>
    );
}
