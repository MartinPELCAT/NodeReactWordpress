import React, { Component } from 'react'
import { Backdrop, CircularProgress } from '@material-ui/core'

export default class FullScreenLoader extends Component {
    render() {
        return (
            <Backdrop open={true}>
                <CircularProgress color="secondary" />
            </Backdrop>
        )
    }
}
