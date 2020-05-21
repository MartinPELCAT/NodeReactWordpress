import React, { Component } from 'react'
import { TextFieldProps, TextField, Typography } from '@material-ui/core'
import { FormField } from './GeneratedFormProps'


interface GeneratedTextFieldProps {
    textFieldProps?: TextFieldProps,
    field: FormField,
    values: any,
    errors: any
    handleChange: any
}


export default class GeneratedTextField extends Component<GeneratedTextFieldProps> {
    render() {
        return (
            <>
                <Typography>{this.props.field.label}</Typography>
                <TextField fullWidth
                    {...this.props.textFieldProps}
                    size='small'
                    placeholder={this.props.field.label}
                    name={this.props.field.name}
                    id={this.props.field.name}
                    onChange={this.props.handleChange}
                    value={this.props.values[this.props.field.name]}
                    variant='outlined'
                    error={!!this.props.errors[this.props.field.name]}
                    helperText={!!this.props.errors[this.props.field.name] && this.props.errors[this.props.field.name]}
                />
            </>
        )
    }
}
