import React, { Component } from 'react';
import './general.css';

class Footer extends Component {
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
            <div class='contact' id='contacto'>
                <div class='container'>
                <div class='row text-center justify-content-center'>
                    <div class='col-12 text-light'>
                    <br/>
                    <br/>
                        <h2>Contacto</h2>
                    </div>
                    <ColoredLine color='#015791'/>
                </div>
                <br/>
                <br/>
                <div class='row text-center justify-content-center'>
                    <div class='col'>
                        <h3 class='text-light'>Social</h3>
                        <br/>
                        <div>
                        <a href='https://github.com/owdelc' class='p-2'><img src='http://pngimg.com/uploads/github/github_PNG48.png' height='60' width='60'/></a>
                        <a href='https://www.linkedin.com/in/oscar-de-le%C3%B3n-chavarr%C3%ADa-9322a8204/' class='p-2'><img src='http://pngimg.com/uploads/linkedIn/linkedIn_PNG23.png' height='60' width='60'/></a>
                        <a href='mailto:owdelc@gmail.com' class='p-2'><img src='http://pngimg.com/uploads/email/email_PNG100747.png' height='60' width='60'/></a>
                        <a href='mailto:dele_gt@protonmail.com' class='p-2'><img src='http://pngimg.com/uploads/email/email_PNG100747.png' height='60' width='60'/></a>
                        <a href='https://stackshare.io/dele19298' class='p-2'><img src='http://pngimg.com/uploads/share/small/share_PNG53.png' height='60' width='60'/></a>
                        </div>
                        <br/>
                        <br/>
                        <br/>

                    </div>
            
                    <div class='col'>
                        <a href='mailto:owdelc@gmail.com'><h5 class='text-light'>owdelc@gmail.com</h5></a>
                        <a href='mailto:dele_gt@protonmail.com'><h5 class='text-light'>dele_gt@protonmail.com</h5></a>
                        <br/>
                        <h5 class='text-light'>Ciudad de Guatemala, Guatemala</h5>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Footer;