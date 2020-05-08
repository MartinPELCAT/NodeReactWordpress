import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
export default class TopSideMenu extends Component {
    render() {
        return (
            <AppBar position="fixed" style={{ zIndex: 9999 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        [NOM DU SITE]
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}
