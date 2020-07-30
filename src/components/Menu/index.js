import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/flix.png';

import Button from '../Button';

import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo" />
            </Link>

            <Link to="/cadastro/video">
                <Button as="a" className="ButtonLink">
                    Novo vídeo
            </Button>
            </Link>
        </nav>
    );
}

export default Menu;