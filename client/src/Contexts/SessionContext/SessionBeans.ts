export interface User {
    id?: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    photoPath?: string,
}

export interface ISessionContext {
    authenticatedUser: User
    changeAuthenticatedUser: Function
}

export const contextDefaultValue: ISessionContext = {
    authenticatedUser: {},
    changeAuthenticatedUser: () => { }
}