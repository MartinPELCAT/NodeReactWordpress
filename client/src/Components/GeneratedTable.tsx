import React, { Component } from 'react'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, Checkbox, TableBody } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

interface ColumnProps {
    name: string,
    label: string,
    width?: string,
}

interface GeneratedTableProps {
    columns: Array<ColumnProps>,
    datas: Array<object> | null,
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
        if (!!this.props.datas) {
            return this.props.datas.map((data: any) => {
                return (
                    <TableRow key={data.id}>
                        <TableCell padding="checkbox"><Checkbox /></TableCell>
                        {this.props.columns.map((column, columIndex) => {
                            return <TableCell key={`${data}-${columIndex}`}>{data[column.name]}</TableCell>
                        })}
                    </TableRow>
                )
            })
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
