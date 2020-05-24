import React, { Component } from 'react'
import PageTitle from '../../../Components/PageTitle'
import GeneratedTable from '../../../Components/GeneratedTable'
import { Typography, Box } from '@material-ui/core'
import ArticlesCategoriesForm from './ArticlesCategoriesForm'
import { FormikHelpers } from 'formik'
import Axios from 'axios'
import FormTableLayout from '../../../Layout/FormTableLayout'

interface ArticlesCategoriesState {
    datas: Array<{ id: string, value: string, label: string, [key: string]: any }>,
}

export default class ArticlesCategories extends Component<{}, ArticlesCategoriesState> {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            datas: [],
        }
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    componentDidMount() {
        Axios.get("/api/articles/categories").then(({ data }) => {
            this.setState({
                datas: data.map((e: any): { id: string, value: string, label: string, [key: string]: any } => {
                    return { id: e._id, label: e.name, value: e._id, description: e.description, inUse: e.inUse };
                })
            })
        }).catch((err) => {
            console.error(err);
        })
    }

    handleSubmitForm(values: { name: string, parentCategorie: string, description: string }, formikHelper: FormikHelpers<any>) {
        Axios.post("/api/articles/categorie", {
            name: values.name,
            parentCategorie: values.parentCategorie,
            description: values.description
        }).then(({ data }) => {
            this.setState({ datas: [{ id: data._id, label: data.name, value: data._id, description: data.description, inUse: 0 }, ...this.state.datas] }, () => {
                formikHelper.resetForm();
            });
        }).catch((err) => {
            formikHelper.setStatus({ error: 'Error: make sure this name in not already used' });
            console.error(err);
        });
    }

    render() {
        return (
            <>
                <PageTitle text="Catégories" />
                <FormTableLayout
                    form={
                        <>
                            <Box marginBottom={2} marginRight={2} >
                                <Typography style={{ fontWeight: 'bold', margin: '1em 0' }} variant='body1'>Ajouter une catégorie</Typography>
                            </Box>
                            <ArticlesCategoriesForm onSubmit={this.handleSubmitForm} datas={this.state.datas}
                            />
                        </>
                    }
                    table={
                        <GeneratedTable
                            columns={[
                                { name: 'label', label: 'Nom' },
                                { name: 'description', label: 'Description', width: '15%' },
                                { name: 'inUse', label: 'Utilisations', width: '15%' }
                            ]}
                            datas={this.state.datas}
                        />
                    }

                />
            </>
        )
    }
}
