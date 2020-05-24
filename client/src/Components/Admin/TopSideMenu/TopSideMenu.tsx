import React, { Component, MouseEventHandler } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Hidden } from '@material-ui/core'
import { Menu } from '@material-ui/icons';

interface Props {
    onClick: MouseEventHandler<any>
}

export default class TopSideMenu extends Component<Props> {
    render() {
        return (
            <AppBar position="fixed" style={{ zIndex: 9999 }}>
                <Toolbar >
                    <Hidden lgUp implementation='css' >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={this.props.onClick}
                        >
                            <Menu />
                        </IconButton>
                    </Hidden>
                    <Typography variant="h6" noWrap>
                        [NOM DU SITE]
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}
