import React, { Component } from 'react'
import LeftSideMenu from '../Components/Admin/LeftSideMenu/LeftSideMenu'
import TopSideMenu from '../Components/Admin/TopSideMenu/TopSideMenu'
import { Toolbar } from '@material-ui/core'
import { RouteComponentProps } from 'react-router-dom';

interface States {
    leftSideMenuOpened: boolean
}

export default class AdminLayout extends Component<RouteComponentProps, States> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            leftSideMenuOpened: false
        }
    }

    componentDidMount() {
        this.props.history.listen(() => { // if click on a left side menu link, close the leftSideMenu 
            this.setState({ leftSideMenuOpened: false });
        });
    }

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <TopSideMenu
                    onClick={() => this.setState({ leftSideMenuOpened: !this.state.leftSideMenuOpened })}
                />
                <LeftSideMenu
                    handleClose={() => this.setState({ leftSideMenuOpened: !this.state.leftSideMenuOpened })}
                    isOpen={this.state.leftSideMenuOpened}
                />
                <div style={{ flexGrow: 1, padding: '1.5em' }}>
                    <Toolbar />
                    {this.props.children}
                </div>
            </div>
        )
    }
}
