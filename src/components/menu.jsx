import React from "react";
import { Link } from "react-router-dom";


const Menu = () => {
    return ( 
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
        </>
     );
}
 
export default Menu;