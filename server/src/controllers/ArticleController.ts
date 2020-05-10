import IControllerBase from "../interfaces/IControllerBase.interface";
import { Router } from 'express';


export default class AuthenticationController implements IControllerBase {
    public controllerPath = '/auth';
    public router = Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        //Routes
    }

}