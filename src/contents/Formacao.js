import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Formacao extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Formação</h1>
            <Widecard title="Gestão em Marketing" where="Unicesumar" from="2014" to ="2016"/>
            <Widecard title="Super Dev" where="ProWay" from="2021" to="2022"/>
            </div>
            )
        }
    }
    
export default Formacao;
    