import React, { Component } from 'react'
import { TableRow, TableCell, Checkbox, Typography, Divider, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { PATH } from '../../config/path';
import { Skeleton } from '@material-ui/lab';
import GeneratedTable from '../../Components/GeneratedTable';

interface AllArticlesStates {
    isLoading: boolean
}

export default class AllArticles extends Component<{}, AllArticlesStates> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        //call API
    }

    getSkeleton() {
        return Array(10).fill(0).map((e, i) => {
            return (
                <TableRow key={i}>
                    <TableCell padding="checkbox"><Checkbox disabled /></TableCell>
                    <TableCell><Skeleton /></TableCell>
                    <TableCell size='small'><Skeleton /></TableCell>
                    <TableCell size='small'><Skeleton /></TableCell>
                    <TableCell size='small'><Skeleton /></TableCell>
                    <TableCell size='small'><Skeleton /></TableCell>
                </TableRow>
            )
        })
    }

    getDatas() {
        return (
            <TableRow>
                <TableCell padding="checkbox"><Checkbox /></TableCell>
                <TableCell>dasdsa</TableCell>
                <TableCell>dsadsa</TableCell>
                <TableCell>dsdasdsa</TableCell>
                <TableCell>dsdasdsa</TableCell>
                <TableCell>dsad</TableCell>
            </TableRow>
        )
    }

    render() {
        return (
            <div className='all-article-page'>
                <div style={{ display: 'flex' }}>
                    <Typography variant='h5' style={{ marginRight: '1em', lineHeight: '1.5em' }} >Articles</Typography>
                    <Button variant='outlined' color='primary' size='small' component={Link} to={PATH.ARTICLE.ADD}>Ajouter</Button>
                </div>
                <Divider variant='fullWidth' style={{ margin: '1em 0' }} />
                <GeneratedTable
                    columns={[
                        { label: 'Titre' },
                        { label: 'Étiquettes', width: '15%' },
                        { label: 'Auteur', width: '15%' },
                        { label: 'Catégories', width: '15%' },
                        { label: 'Date', width: '10%' }
                    ]}
                    datas={null}
                    isLoading={true}
                />
            </div >
        )
    }
}
