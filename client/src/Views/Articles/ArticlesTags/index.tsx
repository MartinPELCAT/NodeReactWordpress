import React, { Component } from 'react';
import PageTitle from '../../../Components/PageTitle';
import GeneratedTable from '../../../Components/GeneratedTable';
import { Typography, Box } from '@material-ui/core';
import ArticlesTagsForm from './ArticlesTagsForm';
import FormTableLayout from '../../../Layout/FormTableLayout';

export default class ArticlesTags extends Component {
    render() {
        return (
            <>
                <PageTitle text="Étiquettes" />
                <FormTableLayout
                    form={
                        <>
                            <Box marginBottom={2} marginRight={2} >
                                <Typography style={{ fontWeight: 'bold', margin: '1em 0' }} variant='body1'>Ajouter une étiquette</Typography>
                            </Box>
                            <ArticlesTagsForm onSubmit={console.log} />
                        </>
                    }
                    table={
                        <GeneratedTable
                            columns={[
                                { name: 'name', label: 'Nom' },
                                { name: 'description', label: 'Description', width: '15%' },
                                { name: 'inUse', label: 'Utilisations', width: '15%' }
                            ]}
                            datas={null}
                            isLoading={true}
                        />
                    }
                />
            </>
        )
    }
}
