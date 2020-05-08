import React, { Component, ReactNode } from 'react'
import { List, ListItemIcon, ListItem, ListItemText, Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
interface MenuBlockProps {
    label: string,
    icon?: ReactNode,
    opened?: boolean,
}

interface MenuBlockState {
    opened: boolean,
}

export default class MenuBlock extends Component<MenuBlockProps, MenuBlockState> {

    constructor(props: MenuBlockProps) {
        super(props);
        this.state = {
            opened: this.props.opened || false
        }
    }

    render() {
        return (
            <>
                <ListItem button onClick={() => this.setState({ opened: this.state.opened ? false : true })}>
                    <ListItemIcon>
                        {this.props.icon || <div style={{ width: 24, height: 24 }}></div>}
                    </ListItemIcon>
                    <ListItemText primary={this.props.label} />
                    {!!this.props.children && (!this.state.opened ? <ExpandLess /> : <ExpandMore />)}
                </ListItem >
                {this.props.children && (
                    <Collapse in={this.state.opened} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding style={{ backgroundColor: 'rgba(222, 222, 222, 0.5)' }}>
                            {this.props.children}
                        </List>
                    </Collapse>
                )}
            </>
        )
    }
}
