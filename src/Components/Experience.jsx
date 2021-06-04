import React, { Component } from 'react';
import './general.css';

class Experience extends Component {
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
            <div class='expertise' id='experience'>
                <div class='container'>
                    <div class='row text-center justify-content-center'>
                        <div class='col-12 text-light'>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h1>Experiencia</h1>
                            <ColoredLine color='#40494f'/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <div class='row text-center justify-content-center'>
                        <div class='col-8 text-light p-2'>
                            
                            <br/>
                            <h5>A lo largo de mi vida me he desempañado laboralmente en algunas empresas del sector industrial,
                                en el desarrollo de software dedicado a inventario y gestión de mobiliario.
                        
                            </h5>
                            <br/>
                            <h5>
                            Adicionalmente, he realizado 
                                el curso XMS&E100 - Introduction to Innovation and Entrepreneurship de la Universidad de Stanford, con la finalidad
                                 de ampliar la capacidad de solucionar las nuevas problematicas de una manera innovadora
                            </h5>
                            <br/>
                            <h5>
                                Algunas de las empresas con las que he laborado en el pasado son:
                            </h5>
                            <h5>
                            • Distribuidora y Comercializadora Industrial (DECOINSA)
                            </h5>  
                            <h5>
                            • Servicios y Soluciones Indutriales (SSI)
                            </h5>                         
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Experience;
