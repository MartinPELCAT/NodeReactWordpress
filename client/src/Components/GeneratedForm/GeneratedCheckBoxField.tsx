import React, { Component } from 'react'
import { Checkbox, CheckboxProps, FormControlLabel } from '@material-ui/core'
import { FormField } from './GeneratedFormProps'


interface GeneratedCheckBoxFieldProps {
    checkboxProps?: CheckboxProps,
    field: FormField,
    values: any,
    errors: any
    handleChange: any
}


export default class GeneratedCheckBoxField extends Component<GeneratedCheckBoxFieldProps> {
    render() {
        return (
            <>
                <FormControlLabel
                    control={
                        <Checkbox
                            {...this.props.checkboxProps}
                            checked={this.props.values[this.props.field.name]}
                            color={'secondary'}
                            value={this.props.values[this.props.field.name]}
                            onChange={this.props.handleChange}
                            name={this.props.field.name}
                            id={this.props.field.name}
                        />
                    }
                    label={this.props.field.label}
                />
            </>
        )
    }
}
