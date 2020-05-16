import IControllerBase from "../interfaces/IControllerBase.interface";
import { Router, Request, Response } from 'express';
import { ArticleService } from '../services';
import { IArticleCategorie, ArticleCategorie } from "models";


export default class ArticleController implements IControllerBase {
    public controllerPath = '/articles';
    public router = Router();
    private ArticleService = ArticleService;
    
    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.post('/addCategorie', this.addCategorie.bind(this));
        this.router.get('/getAll', this.getAllCategories.bind(this));
    }

    private addCategorie(req: Request, res: Response) {
        let { description, name, parentCategorie }: IArticleCategorie = req.body;
        this.ArticleService.createArticleCategorie({ description, name, parentCategorie })
            .then((articleCategorie: IArticleCategorie) => {
                res.send(articleCategorie);
            }).catch((err) => {
                res.status(503).send({ messasge: "Probleme", stack: err })
            })
    }


    private getAllCategories(req: Request, res: Response) {
        this.ArticleService.getAllCategories().then((datas: IArticleCategorie[]) => {
            res.send(datas);
        }).catch((err) => {
            res.status(500).send({ message: 'Internal Error', stack: err });
        })
    }

}