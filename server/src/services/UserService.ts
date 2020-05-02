import { IUser } from "../models/User";
import UserDAO from '../dao/UserDAO'

class UserService {

    private userDao = UserDAO;

    public createUser(user: any): Promise<IUser> {
        return this.userDao.insertUser(user);
    }
}


export default new UserService();