import React, { Component } from 'react'
import PageTitle from '../../Components/PageTitle'
import GeneratedTable from '../../Components/GeneratedTable'
import { Grid, FormControl, TextField, Typography, Select, Box, Button, Paper } from '@material-ui/core'
import { Form } from 'react-bootstrap'

export default class ArticlesCategories extends Component {
    render() {
        return (
            <div className='articles-categories'>
                <PageTitle text="Catégories" />
                <Grid container spacing={1}>
                    <Grid item md={4}>
                        <Box component={Paper}>
                            <Box marginBottom={2} marginRight={2} >
                                <Typography style={{ fontWeight: 'bold', margin: '1em 0' }} variant='body1'>Ajouter une catégorie</Typography>
                            </Box>
                            <FormControl fullWidth variant='outlined' component={Form}>
                                <Box marginRight={2} marginBottom={2}>
                                    <Typography>Nom *</Typography>
                                    <TextField fullWidth size='small' required placeholder="Nom" variant='outlined' />
                                </Box>
                                <Box marginRight={2} marginBottom={2}>
                                    <Typography>Catégorie Parente</Typography>
                                    <Select native fullWidth>
                                        <option aria-label="Catégorie Parente" value="">Aucune</option>
                                        <option value={10}>Catégorie 1</option>
                                        <option value={20}>Catégorie 1</option>
                                    </Select>
                                </Box>
                                <Box marginRight={2} marginBottom={2}>
                                    <Typography>Description</Typography>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={5}
                                        variant="outlined"
                                        placeholder='Description'
                                    />
                                </Box>
                                <Box marginRight={2} marginBottom={2}>
                                    <Button color='secondary' variant='contained' type='submit' disableElevation>Ajouter catégorie</Button>
                                </Box>
                            </FormControl>
                        </Box>
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
