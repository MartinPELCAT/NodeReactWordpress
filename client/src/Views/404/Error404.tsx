import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'

export default class Error404 extends Component<RouteComponentProps> {
    render() {
        return (
            <div>
                Page not found for {this.props.location.pathname}
            </div>
        )
    }
}
