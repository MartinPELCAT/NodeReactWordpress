import React, { Component } from 'react'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, Checkbox, TableBody, Typography, Divider, Button, FormControl, Select } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { PATH } from '../../config/path'

export default class AllArticles extends Component {
    render() {
        return (
            <div className='all-article-page'>
                <div style={{ display: 'flex' }}>
                    <Typography variant='h5' style={{ marginRight: '1em', lineHeight: '1.5em' }} >Articles</Typography>
                    <Button variant='outlined' color='primary' size='small' component={Link} to={PATH.ARTICLE.ADD}>Ajouter</Button>
                </div>
                <Divider variant='fullWidth' style={{ margin: '1em 0' }} />
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox"><Checkbox /></TableCell>
                                <TableCell >Titre</TableCell>
                                <TableCell>Étiquettes</TableCell>
                                <TableCell>Auteur</TableCell>
                                <TableCell>Catégories</TableCell>
                                <TableCell padding='none'>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell padding="checkbox"><Checkbox /></TableCell>
                                <TableCell>Article</TableCell>
                                <TableCell>Mpelcat</TableCell>
                                <TableCell>News</TableCell>
                                <TableCell>Dshdjsak</TableCell>
                                <TableCell padding='none'>12/12/12</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div >
        )
    }
}
