import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom';
import { SessionContext } from '../Contexts/SessionContext';
import { MP } from '../config/path';

const UserRoute = lazy(() => import('./UserRoute'));

export default class ProtectedRoutes extends Component<RouteComponentProps> {
    render() {
        return (
            <SessionContext.Consumer>
                {session => {
                    if (Object.keys(session.authenticatedUser).length !== 0) {
                        return <>
                            <Suspense fallback={<></>}>
                                <Router>
                                    <Switch>
                                        <Route exact path="/user/:id" component={UserRoute} />
                                    </Switch>
                                </Router>
                            </Suspense >
                        </>
                    }
                    else {
                        return <Redirect to={`${MP.LOGIN}?redirect=${this.props.location.pathname}`} />
                    }
                }}
            </SessionContext.Consumer>
        );
    }
}