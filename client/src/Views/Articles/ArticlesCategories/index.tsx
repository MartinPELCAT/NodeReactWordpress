import React, { Component } from 'react'
import PageTitle from '../../../Components/PageTitle'
import GeneratedTable from '../../../Components/GeneratedTable'
import { Grid, Typography, Box } from '@material-ui/core'
import ArticlesCategoriesForm from './ArticlesCategoriesForm'
import { FormikHelpers } from 'formik'
import Axios from 'axios'

interface ArticlesCategoriesState {
    datas: Array<Object>,
    isLoading: boolean
}

export default class ArticlesCategories extends Component<{}, ArticlesCategoriesState> {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            datas: [],
            isLoading: true
        }
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    componentDidMount() {
        Axios.get("/api/articles/getAll").then(({ data }) => {
            this.setState({
                isLoading: false, datas: data.map((e: any) => {
                    return { name: e.name, description: e.description, inUse: e.inUse };
                })
            })
        }).catch((err) => {
            console.error(err);
        })
    }

    handleSubmitForm(values: { name: string, parentCategorie: string, description: string }, formikHelper: FormikHelpers<any>) {
        Axios.post("/api/articles/addCategorie", {
            name: values.name,
            parentCategorie: values.parentCategorie,
            description: values.description
        }).then(({ data }) => {
            this.setState({ datas: [{ name: data.name, description: data.description, inUse: 0 }, ...this.state.datas] })
        }).catch((err) => {
            console.error(err);
        });
    }

    render() {
        return (
            <div className='articles-categories'>
                <PageTitle text="Catégories" />
                <Grid container spacing={1}>
                    <Grid item md={4}>
                        <Box marginBottom={2} marginRight={2} >
                            <Typography style={{ fontWeight: 'bold', margin: '1em 0' }} variant='body1'>Ajouter une catégorie</Typography>
                        </Box>
                        <ArticlesCategoriesForm onSubmit={this.handleSubmitForm} />
                    </Grid>
                    <Grid item md={8}>
                        <GeneratedTable
                            columns={[
                                { label: 'Nom' },
                                { label: 'Description', width: '15%' },
                                { label: 'Utilisations', width: '15%' }
                            ]}
                            datas={this.state.datas}
                            isLoading={this.state.isLoading}
                        />
                    </Grid>
                </Grid>
            </div >
        )
    }
}
