import "./SynopsisField.css"

interface synopsis {
    title?: string,
    children: string
}

const SynopsisField = ({children, title} : synopsis) => {
    return (
        <div className="synopsis-textfield">
            {title && <p className="manhwa-title">{title}</p>}
            <p className="manhwa-synopsis">{children}</p>
        </div>
    );
}

export default SynopsisField; 