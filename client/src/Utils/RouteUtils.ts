import { Location } from 'history'
import { PATH } from '../config/path';

export const redirectTo = (parameters: Location): string => {
    let urlSearch = new URLSearchParams(parameters.search);
    let redirectLink = urlSearch.get("redirect");
    if (redirectLink) { return redirectLink }
    return PATH.ADMIN;
}