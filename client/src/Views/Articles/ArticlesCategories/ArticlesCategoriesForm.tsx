import React, { Component } from 'react'
import { FormikHelpers } from 'formik';
import * as yup from 'yup';
import GeneratedForm from '../../../Components/GeneratedForm';

const schema = yup.object({
    name: yup.string().required("This field is requierd"),
    parentCategorie: yup.string(),
    description: yup.string()
});

interface Props {
    onSubmit(values: { name: string, parentCategorie: string, description: string }, formikHelper: FormikHelpers<any>): void,
    datas: Array<{ id: string, value: string, label: string, [key: string]: any }>
}

export default class ArticlesCategoriesForm extends Component<Props> {
    render() {
        return (
            <GeneratedForm
                schema={schema}
                fields={[
                    {
                        name: 'name',
                        label: 'Nom',
                        type: {
                            input: 'text',
                        }
                    },
                    {
                        name: 'parentCategorie',
                        label: 'Catégorie Parente',
                        type: {
                            input: 'select',
                            datas: this.props.datas
                        }
                    },
                    {
                        name: 'description',
                        label: 'Description',
                        type: {
                            input: 'text',
                            props: {
                                multiline: true,
                                fullWidth: true,
                                rows: 6
                            }
                        }
                    }
                ]}
                button={{
                    label: 'Ajouter catégorie',
                }}
                initialValues={{
                    name: '',
                    parentCategorie: '',
                    description: ''
                }}
                onSubmit={this.props.onSubmit}
            />
        )
    }
}
