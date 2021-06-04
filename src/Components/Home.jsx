import React, { Component } from 'react';
import './general.css';

class Home extends Component {
    render(){
        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 5
                }}
            />
        );
        return(
            
            <div className='Homepage' id='home'>
                <div class='container'>
                   <div class='row text-center justify-content-center fade-in-right'>
                       <div class='col align-self-center intro-content text-light'>
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
                       <ColoredLine color='#95e4ed'/>
                       <h1>Oscar Waldemar De Leon Chavarria</h1>
                       <br/>
                       <h4>Estudiante de Ciencias de la Computacion y Tecnologias de la Informacion en Universidad del Valle de Guatemala (UVG), originario de Sanarate, El Progreso radicado en la Ciudad de Guatemala.
                           Me encanta la programacion y la infinidad de posibilidades que esta tiene. Aspiro en convertirme en un programador experimentado con amplitud de concimientos y
                            desarrollarme profesionalmente en el area de desarrollo web e ingenieria de software.</h4>
                       <ColoredLine color='#95e4ed'/>
                       <a href='https://github.com/owdelc' class='p-2'><img src='http://pngimg.com/uploads/github/github_PNG48.png' height='60' width='60'/></a>
                       <a href='https://www.linkedin.com/in/oscar-de-le%C3%B3n-chavarr%C3%ADa-9322a8204/' class='p-2'><img src='http://pngimg.com/uploads/linkedIn/linkedIn_PNG23.png' height='60' width='60'/></a>
                       <a href='mailto:owdelc@gmail.com' class='p-2'><img src='http://pngimg.com/uploads/email/email_PNG100747.png' height='60' width='60'/></a>
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

export default Home;
