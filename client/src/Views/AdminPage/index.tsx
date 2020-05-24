import React, { Component, Suspense } from 'react'
import AdminLayout from '../../Layout/AdminLayout'
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { CircularProgress, CssBaseline } from '@material-ui/core';
import ArticlesRoutes from '../../Routes/ArticlesRoutes';
import Error404 from '../404/Error404';
import { PATH } from '../../config/path';
import PagesRoutes from '../../Routes/PagesRoutes';
import LinksRoutes from '../../Routes/LinksRoutes';

export default class AdminPage extends Component<RouteComponentProps> {
    render() {
        return (
            <AdminLayout {...this.props}>
                <CssBaseline />
                <Suspense fallback={<CircularProgress />}>
                    <Switch>
                        <Route path={PATH.DASHBOARD.DEFAULT}> DASHBOARD Page / </Route>

                        <Route path={PATH.ARTICLE.DEFAULT} component={ArticlesRoutes} />
                        <Route path={PATH.PAGES.DEFAULT} component={PagesRoutes} />
                        <Route path={PATH.LINKS.DEFAULT} component={LinksRoutes} />
                        <Route exact path={this.props.match.path}> Admin Page / </Route>
                        <Route component={Error404} />
                    </Switch>
                </Suspense>
            </AdminLayout>
        )
    }
}
