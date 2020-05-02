import * as express from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';
import { Request, Response } from 'express'
import { User, IUser } from '../models/User';
import * as _ from 'lodash';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService'

export default class AuthenticationController implements IControllerBase {
    public controllerPath = '/auth';
    public router = express.Router();
    private authenticationService = AuthenticationService;
    private userService = UserService;

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.post('/register', this.register.bind(this));
        this.router.get('/login', this.login.bind(this));
        this.router.get('/checkCurrentUser', this.isLogged.bind(this))
        this.router.post('/logout', this.logout.bind(this))
    }

    private login(req: Request, res: Response) {

        User.find()
            .then(things => res.status(200).json(things))
            .catch(error => res.status(400).json({ error }));

        // let { email, password } = req.body;
        // const options: FindOptions = {
        //     where: {
        //         email: email
        //     }
        // };
        // User.scope("loginScope").findOne<User>(options).then(function (user: User) {
        //     if (!user) { return res.send({ sucess: false, message: "User not found" }) }
        //     bcrypt.compare(password, user.password)
        //         .then((valid) => {
        //             if (valid) {
        //                 user.password = undefined;
        //                 if (!user.token) {
        //                     user.token = jwt.sign({ id: user.id, firstname: user.firstname, lastname: user.lastname, photoPath: user.photoPath, signedOn: new Date() }, JWT_SECRET);
        //                     user.update({ "token": user.token });
        //                 }
        //                 res.cookie("_UID", user.token, { httpOnly: true, signed: true })
        //                 return res.send({ user, message: "You are now logged", sucess: true, });
        //             } else {
        //                 return res.send({ sucess: false, message: "User not found" });
        //             }
        //         })
        //         .catch((err: Error) => {
        //             AuthController.Logger.error(err);
        //             return res.send({ sucess: false, message: "Internal Error" });
        //         })
        // }).catch(function (err: Error) {
        //     AuthController.Logger.error(err);
        //     return res.send({ sucess: false, message: "Internal error" });
        // });
    }

    private register(req: Request, res: Response) {
        let { email, password, lastname, firstname }: IUser = req.body;
        this.userService.createUser({ password, firstname, lastname, email }).then(createdUser => {
            this.authenticationService.generateNewToken(createdUser)
                .then(user => {
                    return res.status(201).json(user);
                })
                .catch(error => {
                    return res.status(500).json({ sucess: false, message: "Internal Error", trace: error });
                });
        }).catch(error => {
            return res.status(500).json({ sucess: false, message: "Internal Error", trace: error });
        })
    }

    private isLogged(req: Request, res: Response) {
        // let token = req.signedCookies._UID;
        // if (!token) {
        //     res.send({ isConnected: false });
        // } else {
        //     User.findOne<User>({
        //         where: {
        //             token: token
        //         }
        //     }).then((user: User) => {
        //         if (!user) { return res.send({ isConnected: false }) }
        //         return res.send({ isConnected: true, user })

        //     }).catch((err: Error) => {
        //         return res.send({ isConnected: false });
        //     })
        // }
    }

    private logout(req: Request, res: Response) {
        // let token = req.signedCookies._UID;
        // if (token) {
        //     res.clearCookie("_UID");
        // }
        // return res.send({ sucess: true, message: "You are now logged out" })
    }
}
