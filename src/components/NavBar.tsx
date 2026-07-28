import {useState} from 'react'
import {link} from 'react-router-dom'


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <nav className='nav'>
            <div className='Menu'>
                <span> Kaza</span>

                <button className='btn_menu_mobile' onClick={toggleMenu}>
                    {isOpen ? "X" : "☰"}
                </button>

                <div className='Nav'>
                    <link to="/">Accueil</link>
                    <link to="../pages/About.tsx">A propos</link>
                    <a href='/'>Contact</a>
                </div>
            </div>

            {isOpen && (
                <div className='mobile_Menu_Open'>
                    <a href='../pages/Home.tsx'>Accueil</a>
                    <a href='../pages/Home.tsx'>A propos</a>
                    <a href='../pages/Home.tsx'>Contact</a>
                </div>
            )}
        </nav>
    )
}
