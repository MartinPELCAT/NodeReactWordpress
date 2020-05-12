import React, { Component } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormControl, TextField, Typography, Box, Button } from '@material-ui/core'
import { Form } from 'react-bootstrap';

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
            <Formik validationSchema={schema}
                onSubmit={this.props.onSubmit}
                initialValues={{
                    name: '',
                    description: '',
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                }) => (
                        <FormControl fullWidth variant='outlined' component={Form} noValidate onSubmit={handleSubmit} error={!!errors}>
                            <Box marginRight={2} marginBottom={2}>
                                <Typography>Nom</Typography>
                                <TextField fullWidth
                                    size='small'
                                    required
                                    placeholder="Nom"
                                    name="name"
                                    id="name"
                                    onChange={handleChange}
                                    value={values.name}
                                    variant='outlined'
                                    error={!!errors.name}
                                    helperText={!!errors.name && errors.name}
                                />
                            </Box>
                            <Box marginRight={2} marginBottom={2}>
                                <Typography>Description</Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={6}
                                    variant="outlined"
                                    placeholder='Description'
                                    name="description"
                                    id="description"
                                    onChange={handleChange}
                                    value={values.description}
                                    error={!!errors.description}
                                    helperText={!!errors.description && errors.description}
                                />
                            </Box>
                            <Box marginRight={2} marginBottom={2}>
                                <Button color='secondary' variant='contained' type='submit' disableElevation>Ajouter une étiquette</Button>
                            </Box>
                        </FormControl>
                    )}
            </Formik>
        )
    }
}
