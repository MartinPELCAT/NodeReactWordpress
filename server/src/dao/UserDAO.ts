import { IUser, User } from "../models/User";
import { FilterQuery } from "mongoose";

class UserDao {

    public insertUser(parameters: IUser): Promise<IUser> {
        delete parameters._id;
        return User.create(parameters);
    }

    public findOne(condition: FilterQuery<IUser>): Promise<IUser> {
        return User.findOne(condition).exec();
    }
}

export default new UserDao();