import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, RouteComponentProps } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import Login from '../Pages/Login/Login';
import { MP } from '../config/path';
import FullScreenLoader from '../Components/FullScreenLoader';

const GeneratedPage = lazy(() => import("../Pages/Generated"))


export default class Routes extends Component<RouteComponentProps> {
    render() {
        return (
            <Suspense fallback={<FullScreenLoader />}>
                <Router>
                    <Switch>
                        <Route exact path={`${MP.LOGIN}`} component={Login} />
                        <Route path={`${MP.ADMIN}`} component={ProtectedRoutes} />
                        <Route path="/" component={GeneratedPage} />
                    </Switch>
                </Router>
            </Suspense>
        );
    }
}