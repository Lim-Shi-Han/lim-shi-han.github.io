import React from 'react';

const Header = (props) => {


    const handleClick = () => {
        const menu = document.querySelector('#mobile-menu');
        const menuLinks = document.querySelector('.navbar__menu');
        if(menu){
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        }
    }

    return (
        <div>
            <nav class="navbar">
                <div class="navbar__toggle" id="mobile-menu" onClick={handleClick}>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <ul class="navbar__menu">
                    <li class="navbar__item">
                        <a href="#main" class="navbar__links">
                            Home
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a href="#about" class="navbar__links">
                            About
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a href="#education" class="navbar__links">
                            Education
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a href="#skills" class="navbar__links">
                            Skills
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a href="#others" class="navbar__links">
                            Others
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a href="#footer" class="navbar__links">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
