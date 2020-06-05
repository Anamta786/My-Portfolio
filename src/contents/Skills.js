import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['HTML','CSS','JS','Ruby','REACT JS', 'Rails', 'Redux']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
            {this.state.myskills.map((value, i)=>{
                return <li key={i}>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }

    export default Skills
