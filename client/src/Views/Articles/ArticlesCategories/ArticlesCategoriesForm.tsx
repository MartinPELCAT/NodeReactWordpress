import React, { Component } from 'react'
import { Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import { FormControl, TextField, Typography, Select, Box, Button, FormHelperText } from '@material-ui/core'
import { Form } from 'react-bootstrap';

const schema = yup.object({
    name: yup.string().required("This field is requierd"),
    parentCategorie: yup.string(),
    description: yup.string()
});

interface Props {
    onSubmit(
        values: { name: string, parentCategorie: string, description: string },
        formikHelper: FormikHelpers<any>): void
}

export default class ArticlesCategoriesForm extends Component<Props> {
    render() {
        return (
            <Formik validationSchema={schema}
                onSubmit={this.props.onSubmit}
                initialValues={{
                    name: '',
                    parentCategorie: '',
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
                                <Typography>Catégorie Parente</Typography>
                                <Select native
                                    fullWidth
                                    onChange={handleChange}
                                    name="parentCategorie"
                                    id="parentCategorie"
                                    error={!!errors.parentCategorie}
                                    value={values.parentCategorie}
                                >
                                    <option aria-label="Catégorie Parente">Aucune</option>
                                    <option value={10}>Catégorie 1</option>
                                    <option value={20}>Catégorie 2</option>
                                </Select>
                                {!!errors.parentCategorie && <FormHelperText>{errors.parentCategorie}</FormHelperText>}
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
                                <Button color='secondary' variant='contained' type='submit' disableElevation>Ajouter catégorie</Button>
                            </Box>
                        </FormControl>
                    )}
            </Formik>
        )
    }
}
