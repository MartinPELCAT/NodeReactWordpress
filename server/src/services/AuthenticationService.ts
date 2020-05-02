import { IUser } from "models/User";
import AuthenticationDAO from '../dao/AuthenticationDAO';
class AuthenticationService {
    private authenticationDAO = AuthenticationDAO;

    public getCurrentUser(): Promise<IUser | null> {
        return new Promise((resolve, reject) => {
            //TODO
        });
    }


    public generateNewToken(user: IUser): Promise<IUser> {
        return this.authenticationDAO.generateNewToken(user);
    }

}


export default new AuthenticationService();