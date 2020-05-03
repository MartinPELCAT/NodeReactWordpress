import { Response, Request, NextFunction } from "express";
import { IUser } from "models/User";

export const clearSessionCookie = (req: Request, res: Response, next: NextFunction): void => {
    let token = req.signedCookies._UID;
    if (token) { res.clearCookie("_UID"); }
    next();
}

export const setSessionCookie = (res: Response, user: IUser): void => {
    res.cookie("_UID", user.token, { httpOnly: true, signed: true })
}