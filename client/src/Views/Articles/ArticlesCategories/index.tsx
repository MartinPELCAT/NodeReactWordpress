import React, { Component } from 'react'
import PageTitle from '../../../Components/PageTitle'
import GeneratedTable from '../../../Components/GeneratedTable'
import { Grid, Typography, Box } from '@material-ui/core'
import ArticlesCategoriesForm from './ArticlesCategoriesForm'

export default class ArticlesCategories extends Component {
    render() {
        return (
            <div className='articles-categories'>
                <PageTitle text="Catégories" />
                <Grid container spacing={1}>
                    <Grid item md={4}>
                        <Box marginBottom={2} marginRight={2} >
                            <Typography style={{ fontWeight: 'bold', margin: '1em 0' }} variant='body1'>Ajouter une catégorie</Typography>
                        </Box>
                        <ArticlesCategoriesForm onSubmit={console.log} />
                    </Grid>
                    <Grid item md={8}>
                        <GeneratedTable
                            columns={[
                                { label: 'Nom' },
                                { label: 'Description', width: '15%' },
                                { label: 'Utilisations', width: '15%' }
                            ]}
                            datas={null}
                            isLoading={true}
                        />
                    </Grid>
                </Grid>
            </div >
        )
    }
}
