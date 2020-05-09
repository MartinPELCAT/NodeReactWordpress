import React, { Component } from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'
import Error404 from '../Pages/404/Error404'
import AllArticles from '../Pages/Articles/AllArticles'
import { PATH } from '../config/path';
import '../Pages/Articles/articles.scss'

export default class ArticlesRoutes extends Component<RouteComponentProps> {
    render() {
        return (
            <Switch>
                <Route exact path={PATH.ARTICLE.ADD} >
                    Add Article
                </Route>
                <Route exact path={PATH.ARTICLE.CATEGORIES} >
                    Categories
                </Route>
                <Route exact path={PATH.ARTICLE.TAGS} >
                    Tags
                </Route>
                <Route exact path={PATH.ARTICLE.DEFAULT} component={AllArticles} />
                <Route component={Error404} />
            </Switch>
        )
    }
}
