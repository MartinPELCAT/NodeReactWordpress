import React, { Component } from "react";
import { RouteComponentProps } from 'react-router-dom';
import { SessionContext } from "../Contexts/SessionContext/";
import Axios from 'axios';

interface UserRouteProps {
    test: string;
    num: number;
}

interface UserRouteState { }

interface RouteParams { id: string }

export default class UserRoute extends Component<RouteComponentProps<RouteParams> & UserRouteProps, UserRouteState> {
    static defaultProps: UserRouteProps;
    componentDidMount() {
        Axios.get("/api/user").then((value: any) => {
            console.log(value);
        }).catch((err: any) => {
            console.log(err);
        });
    }

    render() {
        return (
            <>
                <SessionContext.Consumer>
                    {(context) => (
                        <>
                            <div>{context.authenticatedUser.firstname}</div>
                        </>
                    )}
                </SessionContext.Consumer>
                <div>{this.props.match.params.id}</div>
                <div>{this.props.test}</div>
            </>
        );
    }
}

UserRoute.defaultProps = {
    test: "TETESTST",
    num: 1,
}