import React, { Component } from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'
import '../Views/Articles/articles.scss'
import Error404 from '../Views/404/Error404'
import { PATH } from '../config/path';
import AllPages from '../Views/Pages/AllPages'

export default class PagesRoutes extends Component<RouteComponentProps> {
    render() {
        return (
            <Switch>
                <Route exact path={PATH.PAGES.ADD} >
                    Add Page
                </Route>
                <Route exact path={PATH.PAGES.DEFAULT} component={AllPages} />
                <Route component={Error404} />
            </Switch>
        )
    }
}
