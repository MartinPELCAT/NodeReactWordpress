import React, { Component, ReactNode } from 'react'
import { List, ListItemIcon, ListItem, ListItemText, Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

interface MenuBlockProps {
    label: string,
    icon?: ReactNode,
    opened?: boolean,
    to?: string,
    menuParrentUrl?: string
}

interface MenuBlockState {
    opened: boolean,
}

export default class MenuBlock extends Component<MenuBlockProps, MenuBlockState> {
    constructor(props: MenuBlockProps) {
        super(props);
        this.state = {
            opened: this.props.opened || false,
        }
    }

    componentDidMount() {
        if (!!this.props.menuParrentUrl && (window.location.pathname.includes(this.props.menuParrentUrl))) {
            this.setState({ opened: true });
        }
    }

    getListItemType() {
        if (!!this.props.to) {
            return (
                <ListItem button component={Link} to={this.props.to}>
                    {this.getListItemContent()}
                </ListItem >
            )
        } else {
            return (
                <ListItem button onClick={() => { this.setState({ opened: this.state.opened ? false : true }) }}>
                    {this.getListItemContent()}
                </ListItem >
            )
        }
    }

    getListItemContent() {
        return (
            <>
                <ListItemIcon>
                    {this.props.icon || <div style={{ width: 24, height: 24 }}></div>}
                </ListItemIcon>
                <ListItemText primary={this.props.label} />
                {!!this.props.children && (!this.state.opened ? <ExpandLess /> : <ExpandMore />)}
            </>
        )
    }

    render() {
        return (
            <>
                {this.getListItemType()}
                {
                    this.props.children && (
                        <Collapse in={this.state.opened} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding style={{ backgroundColor: 'rgba(222, 222, 222, 0.5)' }}>
                                {this.props.children}
                            </List>
                        </Collapse>
                    )
                }
            </>
        )
    }
}