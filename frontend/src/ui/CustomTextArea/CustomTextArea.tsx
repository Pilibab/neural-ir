import type React from "react";
import "./CustomTextArea.css"

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

const CustomTextArea = ({ label, ...props } : TextAreaProps) => {
    return(
        <div className="input-container">
            {label && <label>{label}</label>}
            <textarea 
                {...props} 
                className="input-group"
            />
        </div>
    );
}
export default CustomTextArea;
