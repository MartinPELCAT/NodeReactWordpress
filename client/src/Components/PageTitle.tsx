import React, { Component } from 'react'
import { Button, Typography, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'

interface TopSidePageProps {
    text: string,
    button?: {
        buttonLabel: string,
        buttonUrl: string,
    }

}


export default class PageTitle extends Component<TopSidePageProps> {
    render() {
        return (
            <>
                <div style={{ display: 'flex' }}>
                    <Typography variant='h5' style={{ marginRight: '1em', lineHeight: '1.5em' }} >{this.props.text}</Typography>
                    {this.props.button && (
                        <Button variant='outlined' color='primary' size='small' component={Link} to={this.props.button.buttonUrl}>{this.props.button.buttonLabel}</Button>
                    )}
                </div>
                <Divider variant='fullWidth' style={{ margin: '1em 0' }} />
            </>
        )
    }
}
