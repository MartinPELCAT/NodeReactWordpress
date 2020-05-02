import { IUser, User } from "../models/User";
import { Promise } from 'bluebird';
import { hashPassword } from "../utils/bcryptUtils";

class UserDao {
    public insertUser(parameters: IUser): Promise<IUser> {
        delete parameters._id;
        return new Promise((resolve, reject) => {
            hashPassword(parameters.password).then((hashedPassword) => {
                parameters.password = hashedPassword
                User.create(parameters).then((user) => {
                    resolve(user);
                }).catch((err) => {
                    reject(err);
                })
            }).catch((err) => {
                reject(err);
            })
        })
    }
}


export default new UserDao();