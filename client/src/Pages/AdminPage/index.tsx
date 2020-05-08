import React, { Component, Suspense } from 'react'
import AdminLayout from '../../Layout/AdminLayout'
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { CircularProgress, CssBaseline } from '@material-ui/core';
import ArticlesRoutes from '../../Routes/ArticlesRoutes';
import Error404 from '../404/Error404';

export default class AdminPage extends Component<RouteComponentProps> {
    render() {
        return (
            <AdminLayout>
                <CssBaseline />
                <Suspense fallback={<CircularProgress />}>
                    <Switch>
                        <Route path={`${this.props.match.path}/articles`} component={ArticlesRoutes} />
                        <Route exact path={this.props.match.path}> Admin Page / </Route>
                        <Route component={Error404} />
                    </Switch>
                </Suspense>
            </AdminLayout>
        )
    }
}
