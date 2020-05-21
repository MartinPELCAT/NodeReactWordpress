import React, { Component } from 'react'
import { Grid } from '@material-ui/core'


interface FormTableLayoutProps {
    form: JSX.Element,
    table: JSX.Element,
}

export default class FormTableLayout extends Component<FormTableLayoutProps> {
    render() {
        return (
            <Grid container spacing={1}>
                <Grid item md={4}>
                    {this.props.form}
                </Grid>
                <Grid item md={8}>
                    {this.props.table}
                </Grid>
            </Grid>
        )
    }
}
