import React, { Component } from "react";
import { Form, Button, Col, Container, Spinner, Alert } from 'react-bootstrap';
import { Formik, FormikHelpers, FormikValues, FormikProps } from 'formik';
import { object, string } from 'yup';
import './login.scss';
import Axios from "axios";
import { RouteComponentProps } from "react-router-dom";
import { redirectTo } from "../../Routes/RouteUtils";

const schema = object({
    email: string().required().email(),
    password: string().required(),
});

interface LoginState {
    submitLogin: boolean,
}

export default class Login extends Component<RouteComponentProps, LoginState> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            submitLogin: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(formData: { email: any; password: string; }, actions: FormikHelpers<any>) {
        this.setState({ submitLogin: true });
        Axios.post("/api/auth/login", { email: formData.email, password: formData.password }).then(({ data }) => {
            this.setState({ submitLogin: false });
            this.props.history.push(redirectTo(this.props.location));
        }).catch((err) => {
            actions.setStatus({ apiCall: "Wrong credentials" })
            this.setState({ submitLogin: false });
        })
    }

    render() {
        return (
            <div className='login-page'>
                <Container>
                    <Formik
                        validationSchema={schema}
                        onSubmit={this.handleSubmit}
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        initialStatus={{
                            apiCall: ''
                        }}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            values,
                            touched,
                            errors,
                            status,
                        }) =>
                            (
                                <div className='login'>
                                    <Form noValidate onSubmit={handleSubmit} className="mx-auto login-form">
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="login-email">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.email}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.email}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="login-password">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.password}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.password}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>
                                        {!!status.apiCall && <Alert variant='danger' >{status.apiCall}</Alert>}
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Button type="submit" block> {!this.state.submitLogin ?
                                                    'Log in' :
                                                    <Spinner
                                                        as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    />}</Button>
                                            </Form.Group>
                                        </Form.Row>
                                    </Form>
                                </div>
                            )
                        }
                    </Formik>
                </Container>
            </div>
        )
    }
}