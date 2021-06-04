import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Experience from './Components/Experience';
import About from './Components/About';
import Tecnos from './Components/Tecnos'

import Footer from './Components/Footer';

class App extends Component {
    render(){
        return(
            <div className='App'>
            <div className='Navbar'>
                <Navbar></Navbar>
            </div>
            <div className='Inicio'>
                <Home></Home>
            </div>
            <div className='expert'>
                <Experience></Experience>
            </div>
            <div className='tecnologias'>
                <Tecnos></Tecnos>
            </div>
            <div className='Prep'>
                <About></About>
            </div>
            <div className='Contact'>
                <Footer></Footer>
            </div>
            </div>

        );
    }
}

export default App;