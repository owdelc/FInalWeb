import React, { Component } from 'react';
import './general.css';

class Tecnos extends Component {
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
            <div className="Tenos" id='tecnos'>
                <div class='container'>
                    <div class='text-center text-light'>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2>Tecnologias</h2>
                    </div>
                    <ColoredLine color='#40494f'/>
                    <br/>
                    <br/>
                    <div class='row'>
                        <div class='col'>
                            <h3 class='text-center text-light'>Frontend</h3>
                            <br/>
                            <h4 class='text-light text-center'>
                            •   HTML
                            </h4>
                            <h4 class='text-light text-center'>
                            •   CSS/SASS
                            </h4>
                            <h4 class='text-light text-center'>
                            •   Javascript
                            </h4>
                            <h4 class='text-light text-center'>
                            • Bootstrap
                            </h4>
                            <h4 class='text-light text-center'>
                            • React JS
                            </h4>
                            <h4 class='text-light text-center'>
                            • Webpack
                            </h4>
                            <h4 class='text-light text-center'>
                            • Django
                            </h4>
                        </div>
                        <div class='col'>
                        <img src='https://railsware.com/images/team/careers/front-end-developer-role-74120a0c.svg' height='275' width='275' class='ms-5'></img>
                        </div>
                        </div>
                        <br/>
                        <br/>
                        <div class='row'>
                        <div class='col'>
                            <h3 class='text-center text-light'>Backend</h3>
                            <h4 class='text-light text-center'>
                            •   PostgreSQL/MariaDB
                            </h4>
                            <h4 class='text-light text-center'>
                            •   NodeJS
                            </h4>
                            <h4 class='text-light text-center'>
                            •   MongoDB
                            </h4>
                            <h4 class='text-light text-center'>
                            •   Firebase
                            </h4>
                            <h4 class='text-light text-center'>
                            •   AWS
                            </h4>
                            <h4 class='text-light text-center'>
                            •   Python
                            </h4>
                        </div>
                        <div class='col'>
                        <img src='https://railsware.com/images/homepage/technologies-small-backend-7d867fff.svg' height='275' width='275' class='ms-5'></img>
                        </div>
                            
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            
        );
    }
}

export default Tecnos;