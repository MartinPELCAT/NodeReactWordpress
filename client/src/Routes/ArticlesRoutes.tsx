import React, { Component } from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'
import '../Views/Articles/articles.scss'
import Error404 from '../Views/404/Error404'
import AllArticles from '../Views/Articles/AllArticles'
import { PATH } from '../config/path';
import ArticlesCategories from '../Views/Articles/ArticlesCategories';
import ArticlesTags from '../Views/Articles/ArticlesTags'

export default class ArticlesRoutes extends Component<RouteComponentProps> {
    render() {
        return (
            <Switch>
                <Route exact path={PATH.ARTICLE.ADD} >
                    Add Article
                </Route>
                <Route exact path={PATH.ARTICLE.CATEGORIES} component={ArticlesCategories} />
                <Route exact path={PATH.ARTICLE.TAGS} component={ArticlesTags} />
                <Route exact path={PATH.ARTICLE.DEFAULT} component={AllArticles} />
                <Route component={Error404} />
            </Switch>
        )
    }
}
