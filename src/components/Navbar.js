import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    
    render() {
        return (
            <nav>
            <ul>
            <Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem>
            <Navitem item="Sobre mim" tolink="/about"  activec={this.activeitem}></Navitem>
            <Navitem item="Formação" tolink="/formacao"  activec={this.activeitem}></Navitem>
            <Navitem item="Conhecimentos" tolink="/skills"  activec={this.activeitem}></Navitem>
            <Navitem item="Contatos" tolink="/contact"  activec={this.activeitem}></Navitem>
            </ul>
            </nav>
            
            )
            
        }
        
    }
   
    export default Navbar
    