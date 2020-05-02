import { IUser } from "models/User";
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config/KEYS";

class AuthenticationDAO {
    public generateNewToken(user: IUser): Promise<IUser> {
        user.token = jwt.sign({ id: user._id, firstname: user.firstname, lastname: user.lastname, photoPath: user.photoPath, signedOn: new Date() }, JWT_SECRET);
        return user.save();
    }

}

export default new AuthenticationDAO();