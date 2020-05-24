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
                        { name: 'title', label: 'Titre' },
                        { name: 'tags', label: 'Étiquettes', width: '15%' },
                        { name: 'author', label: 'Auteur', width: '15%' },
                        { name: 'categories', label: 'Catégories', width: '15%' },
                        { name: 'date', label: 'Date', width: '10%' }
                    ]}
                    datas={null}
                />
            </div >
        )
    }
}
