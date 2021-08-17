import Axios from "axios";
import Storage, { StorageKeys } from "../storage/Storage";

const baseHeaders = async (othersHeaders: any) => {
    const userLogged = await Storage.get(StorageKeys.USER_LOGGED)
    const { accessToken } = JSON.parse(userLogged || '{}')
    let headers: any = {
        'Content-type': 'application/json'
    }
    if(accessToken){
        headers.Authorization = `Bearer ${accessToken}`
    }

    return { ...headers, ...othersHeaders }
}

export const Get = async (url: string, header: any) => {
    const headers = await baseHeaders(header);
    return Axios.get(url, { headers })
        .then(data => data.data)
        .catch(error => {
            throw error
        });
};

export const Post = async (url: string, data: any, header?: any) => {
    const headers = await baseHeaders(header);
    return Axios.post(url, data, { headers })
        .then(data => data.data)
        .catch(error => {
            throw error
        });
};