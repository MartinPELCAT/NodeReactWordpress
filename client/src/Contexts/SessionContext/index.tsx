import React, { createContext, Component } from "react";
import { ISessionContext, User, contextDefaultValue } from './SessionBeans'
import Axios from "axios";

export const SessionContext = createContext<ISessionContext>(contextDefaultValue);

interface SessionState {
    authenticatedUser: User
    isLoading: boolean
}

export default class Session extends Component<{}, SessionState>{

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            authenticatedUser: {},
            isLoading: true
        }
        this.onAuthenticatedUserChanged = this.onAuthenticatedUserChanged.bind(this);
    }

    componentDidMount() {
        Axios.get("/api/auth/checkCurrentUser").then(({ data }) => {
            if (data.isConnected) {
                let user: User = Object.assign({}, data.user);
                this.setState({ authenticatedUser: user })
            } else {
                this.setState({ authenticatedUser: {} })
            }
        }).catch((err: Error) => {
            console.error(err);
        }).finally(() => {
            this.setState({ isLoading: false })
        })
    }

    onAuthenticatedUserChanged(newUser: User) {
        this.setState({ authenticatedUser: newUser });
    }


    render() {
        return (
            <SessionContext.Provider value={{
                authenticatedUser: this.state.authenticatedUser,
                changeAuthenticatedUser: this.onAuthenticatedUserChanged
            }}>
                {this.state.isLoading ?
                    (<></>)
                    :
                    (this.props.children)
                }

            </SessionContext.Provider>
        );
    }
}