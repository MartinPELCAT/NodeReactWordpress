import React, { Component } from 'react'
import { GeneratedFormProps, FormField } from './GeneratedFormProps'
import { Formik, Form } from 'formik'
import { FormControl, Box, Button } from '@material-ui/core'
import GeneratedTextField from './GeneratedTextField'
import GeneratedSelectField from './GeneratedSelectField'
import { Alert } from '@material-ui/lab'

export default class GeneratedForm extends Component<GeneratedFormProps> {


    getGeneratedInput(field: FormField, errors: any, values: any, handleChange: any) {
        switch (field.type.input) {
            case 'text':
                return <GeneratedTextField
                    textFieldProps={field.type.props}
                    key={field.name}
                    errors={errors}
                    values={values}
                    field={field}
                    handleChange={handleChange}
                />
            case 'select':
                return <GeneratedSelectField
                    selectFieldProps={field.type.props}
                    key={field.name}
                    errors={errors}
                    values={values}
                    field={field}
                    handleChange={handleChange}
                    datas={field.type.datas}
                />
            default:
                return <></>;
        }
    }

    render() {
        return (
            <Formik validationSchema={this.props.schema}
                onSubmit={this.props.onSubmit}
                initialValues={this.props.initialValues}
                initialStatus={{
                    error: ''
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                    status
                }) => (
                        <FormControl fullWidth variant='outlined' component={Form} noValidate onSubmit={handleSubmit} error={!!errors}>
                            {this.props.fields.map(field => {
                                return (
                                    <Box marginRight={2} marginBottom={2} key={field.name} >
                                        {this.getGeneratedInput(field, errors, values, handleChange)}
                                    </Box>
                                )
                            })}

                            {!!status.error && (
                                <Box marginRight={2} marginBottom={2}>
                                    <Alert color='error' variant='outlined'>{status.error}</Alert>
                                </Box>
                            )}
                            <Box marginRight={2} marginBottom={2}>
                                <Button color='secondary' variant='contained' type='submit' disableElevation>{this.props.button.label}</Button>
                            </Box>
                        </FormControl>
                    )}
            </Formik>
        )
    }
}
