import React, { Component } from 'react';
import './general.css';
import { Link } from 'react-scroll';

class NavBar extends Component {
    render(){
        return(
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">
                Oscar De Leon
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav text-lg d-flex">

                <a class="nav-link active" href="#"><Link 
                activeClass='active'
                to='home'
                spy={false}
                smooth={true}
                offset={0}
                duration={500}>
                    Inicio
                </Link></a>

                <a class="nav-link active" href="#"><Link 
                activeClass='active'
                to='experience'
                spy={false}
                smooth={true}
                offset={0}
                duration={500}>
                    Experiencia
                </Link></a>

                <a class="nav-link active" href="#"><Link 
                activeClass='active'
                to='tecnos'
                spy={false}
                smooth={true}
                offset={0}
                duration={500}>
                    Tecnologias
                </Link></a>

                <a class="nav-link active" href="#"><Link 
                activeClass='active'
                to='preparacion'
                spy={false}
                smooth={true}
                offset={0}
                duration={500}>
                    Proyectos
                </Link></a>

                <a class="nav-link active" href="#"><Link 
                activeClass='active'
                to='contacto'
                spy={false}
                smooth={true}
                offset={0}
                duration={500}>
                    Contacto
                </Link></a>
                
                
                </div>
                </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;