import React, { Component } from 'react'
import LeftSideMenu from '../Components/Admin/LeftSideMenu/LeftSideMenu'
import TopSideMenu from '../Components/Admin/TopSideMenu/TopSideMenu'
import { Toolbar } from '@material-ui/core'

export default class AdminLayout extends Component {
    render() {
        return (
            <div style={{ display: 'flex' }}>
                <TopSideMenu />
                <LeftSideMenu />
                <div style={{ flexGrow: 1, padding: '1.5em' }}>
                    <Toolbar />
                    {this.props.children}
                </div>
            </div>
        )
    }
}
