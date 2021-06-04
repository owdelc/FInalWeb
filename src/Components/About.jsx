import React, { Component } from 'react';
import './general.css';

class About extends Component {
    render(){
        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 5,
                    
                }}
            />
        );
        return(
            <div className='about' id='preparacion'>
                <div class='container'>
                    <div class='text-center text-light'>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                        <h2>Proyectos</h2>
                    </div>
                    <ColoredLine color='#40494f'/>
                    <br/>
                    <div class='row text-center justify-content-center fade-in-right'>
                       <div class='col p-1'>
                           <h4 class='text-light'>Proyecto Ecommerce</h4>
                           <br/>
                           <div class='row mt-1'>
                           <iframe width="375" height="250" 
                           src="https://www.youtube.com/embed/S7YLLHyFJW8" 
                           title="YouTube video player" 
                           frameborder="0" 
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                       </div>
                       </div>
                       <div class='col p-1'>
                            <h4 class='text-light'>Portal de Reportes de Especias invasoras</h4>
                            <br/>
                            <div class='row mt-1'>
                            <iframe width="375" height="250" 
                           src="https://www.youtube.com/embed/PcaP92P9iUQ" 
                           title="YouTube video player" 
                           frameborder="0" 
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                       </div>
                       </div>
                       <div class='col p-1'>
                            <h4 class='text-light'>Intento de Replicar Sitio Web INGUAT</h4>
                            <br/>
                            <div class='row mt-1'>
                            <iframe width="375" height="250" 
                           src="https://www.youtube.com/embed/yq-wjoT-G5U" 
                           title="YouTube video player" 
                           frameborder="0" 
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
                            </div>
                       </div>
                   
                    

                </div>
                <br/>
                <br/>
            </div>
            </div>
        );
    }
}

export default About;