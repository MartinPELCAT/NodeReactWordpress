import React, { Component } from 'react'
import AdminLayout from '../../Layout/AdminLayout'

export default class AdminPage extends Component {
    render() {
        return (
            <AdminLayout>
                {this.props.children}
            </AdminLayout>

        )
    }
}
