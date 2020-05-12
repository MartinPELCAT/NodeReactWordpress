import React, { Component } from 'react'
import { PATH } from '../../config/path';
import GeneratedTable from '../../Components/GeneratedTable';
import PageTitle from '../../Components/PageTitle';

interface AllPagesStates {
    isLoading: boolean
}

export default class AllPages extends Component<{}, AllPagesStates> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        //call API
    }

    render() {
        return (
            <div className='all-article-page'>
                <PageTitle text="Pages" button={{ buttonLabel: "Ajouter", buttonUrl: PATH.PAGES.ADD }} />
                <GeneratedTable
                    columns={[
                        { label: 'Titre' },
                        { label: 'Auteur', width: '20%' },
                        { label: 'Date', width: '20%' }
                    ]}
                    datas={null}
                    isLoading={true}
                />
            </div >
        )
    }
}
