import { IUser } from "models/User";
import AuthenticationDAO from '../dao/AuthenticationDAO';
import UserDAO from '../dao/UserDAO';
import { FilterQuery } from "mongoose";
import { comparePassword } from "../utils/bcryptUtils";

class AuthenticationService {
    private authenticationDAO = AuthenticationDAO;
    private userDAO = UserDAO;
    public getCurrentUser(): Promise<IUser | null> {
        return new Promise((resolve, reject) => {
            //TODO
        });
    }


    public generateNewToken(user: IUser): Promise<IUser> {
        return this.authenticationDAO.generateNewToken(user);
    }

    public findUserOrFail(condition: FilterQuery<IUser>, password: string): Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {
            this.userDAO.findOne(condition).then((user) => {
                if (user) {
                    comparePassword(password, user.password).then(() => {
                        user.password = undefined; // dont send back password in response
                        resolve(user);
                    }).catch(() => {
                        reject(new Error("User not found"));
                    })
                } else {
                    reject(new Error("User not found"));
                }
            }).catch((err) => {
                reject(err);
            })
        })
    }

}


export default new AuthenticationService();