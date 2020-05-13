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
                        { label: 'Nom' },
                        { label: 'URL', width: '30%' },
                        { label: 'Categorie', width: '20%' },
                        { label: 'Utilisation', width: '10%' }
                    ]}
                    datas={null}
                    isLoading={true}
                />
            </div >
        )
    }
}
