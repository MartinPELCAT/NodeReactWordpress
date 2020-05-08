import React, { Component } from 'react'
import LeftSideMenu from '../Components/Admin/LeftSideMenu/LeftSideMenu'
import TopSideMenu from '../Components/Admin/TopSideMenu/TopSideMenu'

export default class AdminLayout extends Component {
    render() {
        return (
            <div>
                <TopSideMenu />
                <LeftSideMenu />
            </div>
        )
    }
}
