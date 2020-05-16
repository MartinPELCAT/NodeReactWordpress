import { ArticleDAO } from '../dao'
import { IArticleCategorie } from 'models';
class ArticleService {
    private ArticleDAO = ArticleDAO;

    public createArticleCategorie(parameters: any): Promise<IArticleCategorie> {
        parameters.parentCategorie = parameters.parentCategorie ? parameters.parentCategorie : null;
        return this.ArticleDAO.createArticleCategorie(parameters);
    }

    public getAllCategories(): Promise<IArticleCategorie[]> {
        return this.ArticleDAO.getAllCategories();
    }

}


export default new ArticleService();