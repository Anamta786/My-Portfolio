import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Computer Science and Engineering (B.tech)" where="Integral University" from="May 2014" to="June 2018"/>
            <Widecard title="Indian Certificate of Secondary Education (ICSE)" where="Brains Convent College" from="2011" to="2012"/>
            <Widecard title="Indian School Certificate (ISC)" where="Brains Convent College" from="2013" to="2014"/>
            </div>
            )
        }
    }

export default Education
