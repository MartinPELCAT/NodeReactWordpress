import React, { Component } from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'
import Error404 from '../Pages/404/Error404'

export default class ArticlesRoutes extends Component<RouteComponentProps> {
    render() {
        return (
            <Switch>
                <Route exact path={`${this.props.match.path}/addArticle`} >
                    Add Article
                </Route>
                <Route exact path={`${this.props.match.path}/categories`} >
                    Categries
                </Route>
                <Route exact path={`${this.props.match.path}/tags`} >
                    Tags
                </Route>
                <Route exact path={this.props.match.path} >
                    All articles
                </Route>
                <Route component={Error404} />
            </Switch>
        )
    }
}
