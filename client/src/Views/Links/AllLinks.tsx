import React, { Component } from 'react'
import { PATH } from '../../config/path';
import GeneratedTable from '../../Components/GeneratedTable';
import PageTitle from '../../Components/PageTitle';

interface AllLinksStates {
    isLoading: boolean
}

export default class AllLinks extends Component<{}, AllLinksStates> {
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
            <div className='all-links-page'>
                <PageTitle text="Liens" button={{ buttonLabel: "Ajouter", buttonUrl: PATH.PAGES.ADD }} />
                <GeneratedTable
                    columns={[
                        { name: 'name', label: 'Nom' },
                        { name: 'URL', label: 'URL', width: '30%' },
                        { name: 'categorie', label: 'Categorie', width: '20%' },
                        { name: 'inUse', label: 'Utilisation', width: '10%' }
                    ]}
                    datas={null}
                />
            </div >
        )
    }
}
