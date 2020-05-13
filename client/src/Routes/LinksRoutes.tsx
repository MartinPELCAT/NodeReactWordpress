import React, { Component } from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'
import '../Views/Articles/articles.scss'
import Error404 from '../Views/404/Error404'
import { PATH } from '../config/path';
import AllLinks from '../Views/Links/AllLinks'
import LinksCategories from '../Views/Links/LinksCategories'

export default class LinksRoutes extends Component<RouteComponentProps> {
    render() {
        return (
            <Switch>
                <Route exact path={PATH.LINKS.ADD} >
                    Add Link
                </Route>
                <Route exact path={PATH.LINKS.DEFAULT} component={AllLinks} />
                <Route exact path={PATH.LINKS.CATEGORIES} component={LinksCategories} />
                <Route component={Error404} />
            </Switch>
        )
    }
}
