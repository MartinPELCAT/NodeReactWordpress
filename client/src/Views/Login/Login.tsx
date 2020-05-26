import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { FormikHelpers } from 'formik';
import { object, string, boolean } from 'yup';
import './login.scss';
import Axios from "axios";
import { RouteComponentProps } from "react-router-dom";
import { SessionContext } from "../../Contexts/SessionContext";
import { ISessionContext } from "../../Contexts/SessionContext/SessionBeans";
import { redirectTo } from "../../Utils/RouteUtils";
import GeneratedForm from "../../Components/GeneratedForm";

const schema = object({
    email: string().required().email(),
    password: string().required(),
    rememberMe: boolean()
});

interface LoginState {
    submitLogin: boolean,
}

export default class Login extends Component<RouteComponentProps, LoginState> {
    context!: ISessionContext;

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            submitLogin: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(formData: { email: any; password: string; rememberMe: boolean }, actions: FormikHelpers<any>) {
        this.setState({ submitLogin: true });
        Axios.post("/api/auth/login", { email: formData.email, password: formData.password, rememberMe: formData.rememberMe })
            .then(({ data }) => {
                this.context.changeAuthenticatedUser(data.user);
                this.setState({ submitLogin: false });
                this.props.history.push(redirectTo(this.props.location));
            }).catch(() => {
                actions.setStatus({ error: "Identifiant ou mot de passe incorrect" })
                this.setState({ submitLogin: false });
            })
    }

    render() {
        return (
            <div className='login-page'>
                <Container>
                    <div className='login '>
                        <div className="login-form">
                            <GeneratedForm
                                schema={schema}
                                button={{
                                    label: 'Log in'
                                }}
                                initialValues={{
                                    email: '',
                                    password: '',
                                    rememberMe: false
                                }}
                                fields={[
                                    {
                                        name: 'email',
                                        label: "Email",
                                        type: {
                                            input: 'text'
                                        }
                                    }, {
                                        name: 'password',
                                        label: "Mot de passe",
                                        type: {
                                            input: 'text',
                                            props: {
                                                type: 'password'
                                            }
                                        }
                                    }, {
                                        name: 'rememberMe',
                                        label: "Keep me in",
                                        type: {
                                            input: 'checkbox'
                                        }
                                    }
                                ]}

                                onSubmit={this.handleSubmit}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

Login.contextType = SessionContext;