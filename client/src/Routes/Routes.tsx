import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, RouteComponentProps } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import Login from '../Views/Login/Login';
import { PATH } from '../config/path';
import FullScreenLoader from '../Components/FullScreenLoader';

const GeneratedPage = lazy(() => import("../Views/Generated"))


export default class Routes extends Component<RouteComponentProps> {
    render() {
        return (
            <Suspense fallback={<FullScreenLoader />}>
                <Router>
                    <Switch>
                        <Route exact path={PATH.LOGIN} component={Login} />
                        <Route path={PATH.ADMIN} component={ProtectedRoutes} />
                        <Route path="/" component={GeneratedPage} />
                    </Switch>
                </Router>
            </Suspense>
        );
    }
}