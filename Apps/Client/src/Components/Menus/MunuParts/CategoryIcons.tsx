import React, { useState } from 'react';
import '../MenuStyle.scss'
interface IconProps {
    iconType: string;
    iconType2: string;
}

const CategoryIcon: React.FC<IconProps> = ({ iconType, iconType2 }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img className="category-icons" src={`${iconType}`} alt={iconType} />
            {
                isHovered &&
                <img className="category-icons"  src={`${iconType2}`} alt={`${iconType2}`} />
            }
        </div>
    );
};

export default CategoryIcon;
