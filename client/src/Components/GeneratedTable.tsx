import React, { Component } from 'react'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, Checkbox, TableBody } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { Warning } from '@material-ui/icons'

interface ColumnProps {
    label: string,
    width?: string,
}

interface GeneratedTableProps {
    columns: Array<ColumnProps>,
    datas: object | null,
    isLoading: boolean
}

export default class GeneratedTable extends Component<GeneratedTableProps> {

    getSkeleton() {
        return Array(10).fill(0).map((e, i) => {
            return (
                <TableRow key={i}>
                    <TableCell padding="checkbox"><Checkbox disabled /></TableCell>
                    {Array(this.props.columns.length).fill(0).map((el, index) => {
                        return <TableCell key={`skeleton-${i}-${index}`}><Skeleton /></TableCell>
                    })}
                </TableRow>
            )
        })
    }

    getDatas() {
        if (!(this.props.datas && (this.props.columns.length === Object.keys(this.props.datas).length))) {
            return (
                <TableRow style={{ backgroundColor: 'rgb(253, 236, 234)', color: 'rgb(97, 26, 21)' }} >
                    <TableCell> <Warning /> </TableCell>
                    <TableCell>Incorrect datas</TableCell>
                    {Array(this.props.columns.length - 1).fill(0).map((el, index) => {
                        return <TableCell key={`incorrect-${index}`}></TableCell>
                    })}
                </TableRow>
            )
        }
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell padding="checkbox"><Checkbox disabled={this.props.isLoading} /></TableCell>
                            {this.props.columns.map((col, i) => {
                                if (!!col.width) { return <TableCell key={`${col}-${i}`} style={{ width: col.width }}>{col.label}</TableCell> }
                                return <TableCell key={`${col}-${i}`}>{col.label}</TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.isLoading ? this.getSkeleton() : this.getDatas()}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}
