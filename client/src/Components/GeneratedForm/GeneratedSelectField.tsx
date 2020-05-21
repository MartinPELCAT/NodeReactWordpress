import React, { Component } from 'react'
import { Typography, Select, FormHelperText, SelectProps } from '@material-ui/core'
import { FormField } from './GeneratedFormProps'


interface GeneratedSelectFieldProps {
    selectFieldProps?: SelectProps,
    field: FormField,
    values: any,
    errors: any
    handleChange: any,
    datas: Array<{ id: string, [key: string]: any }>
}


export default class GeneratedSelectField extends Component<GeneratedSelectFieldProps> {
    render() {
        return (
            <>
                <Typography>{this.props.field.label}</Typography>
                <Select native
                    {...this.props.selectFieldProps}
                    fullWidth
                    onChange={this.props.handleChange}
                    name={this.props.field.name}
                    id={this.props.field.name}
                    error={!!this.props.errors[this.props.field.name]}
                    value={this.props.values[this.props.field.name]}
                >
                    <option aria-label={this.props.field.label}>Aucune</option>
                    {this.props.datas.map((el) => {
                        return <option key={el.id} value={el.value}>{el.label}</option>
                    })}
                </Select>
                {!!this.props.errors[this.props.field.name] && <FormHelperText>{this.props.errors[this.props.field.name]}</FormHelperText>}

            </>
        )
    }
}
