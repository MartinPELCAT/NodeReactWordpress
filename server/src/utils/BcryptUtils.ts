import { hash } from "bcrypt"

export const hashPassword = (password): Promise<string> => {
    return hash(password, 4);
}