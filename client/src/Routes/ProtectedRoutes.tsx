import React, { Suspense, Component } from 'react';
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom';
import { SessionContext } from '../Contexts/SessionContext';
import { MP } from '../config/path';
import FullScreenLoader from '../Components/FullScreenLoader';
import AdminPage from '../Pages/AdminPage';


export default class ProtectedRoutes extends Component<RouteComponentProps> {
    render() {
        return (
            <SessionContext.Consumer>
                {session => {
                    if (Object.keys(session.authenticatedUser).length !== 0) {
                        return <>
                            <Suspense fallback={<FullScreenLoader />}>
                                <Switch>
                                    <Route path={MP.ADMIN} component={AdminPage} />
                                </Switch>
                            </Suspense>
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