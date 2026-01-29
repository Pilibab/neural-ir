import "./ContainerPanel.css"
import React from "react";

interface ComponentProps {
    children: React.ReactNode;
    variant: "primary" | "secondary"
}

const ContainerPanel = ({children, variant}: ComponentProps) => {
    return (
        <div className={`Container size-variant-${variant}`}>
            {children}
        </div>
    )
}

export default ContainerPanel;