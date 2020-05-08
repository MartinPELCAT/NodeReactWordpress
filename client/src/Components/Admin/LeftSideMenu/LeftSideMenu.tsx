import React, { Component } from 'react';
import './LeftSideMenu.scss';
import { Drawer, Toolbar, List } from '@material-ui/core';
import MenuBlock from '../MenuBlock/MenuBlock';
import { Dashboard, PermMedia, Link as LinkIcon, FileCopy, Create, Comment, RateReview, FormatPaint, Person, Build, Settings } from '@material-ui/icons'

const drawerWidth = 240;

export default class LeftSideMenu extends Component {

    render() {
        return (
            <Drawer
                style={{ width: drawerWidth, flexShrink: 0 }}
                variant="permanent"
                className="left-side-menu" >
                <Toolbar />
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    style={{ width: drawerWidth }} >
                    <MenuBlock label="Tableau de bord" icon={<Dashboard />}>
                        <MenuBlock label="Acceuil" to='/mp-admin' />
                        <MenuBlock label="Mes Commentaires" />
                        <MenuBlock label="Stats du site" />
                    </MenuBlock>

                    <MenuBlock label="Articles" icon={<Create />}>
                        <MenuBlock label="Tous les articles" to="/mp-admin/articles" />
                        <MenuBlock label="Ajouter" to="/mp-admin/articles/addArticle" />
                        <MenuBlock label="Catégories" to="/mp-admin/articles/categories" />
                        <MenuBlock label="Étiquettes" to="/mp-admin/articles/tags" />
                    </MenuBlock>

                    <MenuBlock label="Médias" icon={<PermMedia />}>
                        <MenuBlock label="Bibliothèque" />
                        <MenuBlock label="Ajouter" />
                    </MenuBlock>

                    <MenuBlock label="Liens" icon={<LinkIcon />}>
                        <MenuBlock label="Tous les liens" />
                        <MenuBlock label="Ajouter" />
                        <MenuBlock label="Catégories de liens" />
                    </MenuBlock>

                    <MenuBlock label="Pages" icon={<FileCopy />}>
                        <MenuBlock label="Toutes les pages" />
                        <MenuBlock label="Ajouter" />
                    </MenuBlock>
                    {/* todo at the end */}
                    <MenuBlock label="Commentaires" icon={<Comment />} />
                    <MenuBlock label="Avis" icon={<RateReview />} />
                    <MenuBlock label="Apparence" icon={<FormatPaint />} />
                    <MenuBlock label="Utilisateurs" icon={<Person />} />
                    <MenuBlock label="Outils" icon={<Build />} />
                    <MenuBlock label="Réglages" icon={<Settings />} />
                </List>
            </Drawer>
        )
    }
}