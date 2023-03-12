import { httpClient } from "../../utils/wrapper";
import { URLS } from "../../constants/urls";
import type { IMessage } from './interface';

export const getMessages = async (id: string) => {
    const res = await httpClient.get<{ response: IMessage[] }>(URLS.MESSAGES, {
      params: {
        chat_id: id
      }
    });
    
    return res.data.response;
}
