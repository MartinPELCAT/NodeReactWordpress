import { IUser, User } from "../models/User";
import { IArticleCategorie, ArticleCategorie } from "../models";

class ArticleDAO {

    public createArticleCategorie(parameters: IArticleCategorie): Promise<IArticleCategorie> {
        delete parameters._id;
        return ArticleCategorie.create(parameters);
    }

    public getAllCategories(): Promise<IArticleCategorie[]> {
        return ArticleCategorie.find().exec();
    }
}

export default new ArticleDAO();