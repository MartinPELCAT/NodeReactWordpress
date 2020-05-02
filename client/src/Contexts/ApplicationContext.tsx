import React, { Component } from 'react';
import SessionContext from './SessionContext';



export default class ApplicationContext extends Component {
    render() {
        return (
            <SessionContext>
                    {this.props.children}
            </SessionContext>
        );
    }
}