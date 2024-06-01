import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Le Tue Ricette</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recipes">Ricette</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
