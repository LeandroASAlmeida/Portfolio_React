import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['HTML','CSS','JAVASCRIPT','REACT NATIVE','REACT JS','ANGULAR','JQUERY','AJAX','TYPESCRIPT','MYSQL','NODEJS','PYTHON','DJANGO']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">Cursos Proway SUPERDEV</h1>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    
