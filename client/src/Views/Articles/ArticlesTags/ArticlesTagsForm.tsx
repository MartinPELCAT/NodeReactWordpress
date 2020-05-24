import React, { Component } from 'react'
import * as yup from 'yup';
import GeneratedForm from '../../../Components/GeneratedForm';

const schema = yup.object({
    name: yup.string().required("This field is requierd"),
    description: yup.string()
});

interface Props {
    onSubmit(): void
}

export default class ArticlesTagsForm extends Component<Props> {
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
                    label: 'Ajouter une étiquette',
                }}
                initialValues={{
                    name: '',
                    description: ''
                }}
                onSubmit={this.props.onSubmit}
            />
        )
    }
}
