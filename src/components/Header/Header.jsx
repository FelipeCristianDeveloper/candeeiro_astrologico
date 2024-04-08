import React from "react";
import './Style.css';

const Header = () => {

    return (
        <header className="header">
            <div className="logo">
                <h1><a href="">Candeeiro Astrológico</a></h1>
            </div>

            <nav className="navbar">
                <ul className="nav-menu">
                    <li className="menu-item"><a href="#">Início</a></li>
                    <li className="menu-item"><a href="#sobre">Sobre</a></li>
                    <li className="menu-item"><a href="#servicos">Serviços</a></li>
                    <li className="menu-item"><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header