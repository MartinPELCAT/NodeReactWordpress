import * as yup from 'yup';
import { TextFieldProps, SelectProps, CheckboxProps, RadioGroupProps, ButtonProps } from '@material-ui/core';
import { FormikHelpers, FormikValues } from 'formik';

type FormFieldType =
    { props?: TextFieldProps, input: 'text' } |
    { props?: SelectProps, input: 'select', datas: Array<{ id: string, value: string, label: string, [key: string]: any }> } |
    { props?: CheckboxProps, input: 'checkbox' } |
    { props?: RadioGroupProps, input: 'radio' }

export interface FormField {
    name: string,
    label: string,
    type: FormFieldType
}

export interface GeneratedFormProps {
    onSubmit(values: any, helper: FormikHelpers<any>): void,
    schema: yup.ObjectSchema,
    initialValues: FormikValues,
    fields: Array<FormField>,
    button: {
        label: string
        props?: ButtonProps
    }
}

let testProps: GeneratedFormProps = {
    onSubmit: function (values, helpe) { },
    initialValues: {
        name: ''
    },
    schema: yup.object({
        name: yup.string().required("This field is requierd"),
    }),
    fields:
        [
            {
                name: 'name',
                label: 'Nom',
                type: {
                    input: "text",
                    props: {

                    }
                }
            }
        ],
    button: {
        label: 'Ajouter categorie',
        props: {
            color: 'secondary',
            variant: 'contained',
            type: 'submit',
            disableElevation: true
        }
    }
}

console.log(testProps.schema);
