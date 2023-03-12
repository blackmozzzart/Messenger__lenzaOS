import { httpClient } from "../../utils/wrapper";
import { URLS } from "../../constants/urls";
import type { IChat } from './interface';

export const getChatList = async () => {
    const res = await httpClient.get<{ response: IChat[] }>(URLS.LIST);
    
    return res.data.response;
}