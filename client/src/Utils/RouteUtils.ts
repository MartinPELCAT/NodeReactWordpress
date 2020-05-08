import { Location } from 'history'
import { MP } from '../config/path';

export const redirectTo = (parameters: Location): string => {
    let urlSearch = new URLSearchParams(parameters.search);
    let redirectLink = urlSearch.get("redirect");
    if (redirectLink) { return redirectLink }
    return MP.ADMIN;
}