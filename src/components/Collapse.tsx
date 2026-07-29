import { useState } from "react";

type CollapseProps = {
    title: string;
    content: React.ReactNode;
}

function Collapse({ title, content}: CollapseProps) {
    const [isOpen, setIsOpen]= useState(false);

    function toggleCollapse() {
        setIsOpen(!isOpen);
    }

    return(
        <div className="collapse">
            <button className="btn_collapse" onClick={toggleCollapse}>
            {title}
            <span className={`arrow ${isOpen ? " open" : ""}`}>▼</span>
            </button>

            {isOpen && (
                <div className="collapse_content">
                    {content}
                </div>
            )}

        </div>
    );
}

export default Collapse