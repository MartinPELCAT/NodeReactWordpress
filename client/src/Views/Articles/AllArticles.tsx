import React, { Component } from 'react'
import { PATH } from '../../config/path';
import GeneratedTable from '../../Components/GeneratedTable';
import PageTitle from '../../Components/PageTitle';

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

    render() {
        return (
            <div className='all-article-page'>
                <PageTitle text="Articles" button={{ buttonLabel: "Ajouter", buttonUrl: PATH.ARTICLE.ADD }} />
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
