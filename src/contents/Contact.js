import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Meus Contatos</h1>
            <h3>Email  :   leandroslv125@gmail.com</h3>
            <h3>Fone: 47-98846-3582</h3>

            
            <a  className="cv" href="https://drive.google.com/file/d/1gS86kT7x_LrhQinpbN9L3jI9TkxggKCu/view?usp=sharing" target='blank'>BAIXE MEU CV </a>
            

            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    
