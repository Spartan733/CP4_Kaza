import {useState, useEffect} from 'react';
import logements from '../data/logements.json'


const Collapse({description, equipements}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState<Logements[]>([]);

    useEffect(() => {
        setItems(logements)
    }, [])

    const openCollapse = () => {
        setIsOpen(!isOpen)
    };

    return(
        <div>
            {logements.map((logements)) => (
                <div key={logements.id}>
                    <button className='btn_collaps-desc' onClick={openCollapse} aria-expanded={isOpen} aria-controls='{}'> 
                        Description
                        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
                    </button>
                </div>
            ))}
            
            <div>
                {isOpen === true (
                    <p>{logements.description}</p>
                )}
            </div>

            <button  onClick={openCollapse} aria-expanded={isOpen}>
                Equipements
                <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </button>
        </div>
    )
}

export default Collapse