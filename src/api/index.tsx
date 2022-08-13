import youtube from './youtube';
import { IYoutube } from '../@types/youtube';

export const getInitial = async () : Promise<IYoutube[]> => {
  const {data} = await youtube.get('/');
  return data?.items;
}

export const getList = async (query: string) : Promise<IYoutube[]> => {
  const {data} = await youtube.get('/', {
    params: {
      q: query
    }
  });
  return data?.items;
}