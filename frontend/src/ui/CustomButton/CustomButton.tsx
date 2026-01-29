import React from 'react';
import "./CustomButton.css"

// This interface inherits all standard button props (type, onClick, etc.)
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string;
}

const CustomButton = ({ variant = 'primary', children, ...props }: ButtonProps) => {
    return (
        <button 
            className={`btn-${variant}`} 
            {...props} // This spreads all standard props like onClick
        >
            {children}
        </button>
    );
};

export default CustomButton;