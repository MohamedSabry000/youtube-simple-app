import * as React from 'react';
import { YoutubeContextType, IYoutube } from '../@types/youtube';

export const YoutubeContext = React.createContext<YoutubeContextType | null>(null);

const YoutubeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [items, setItems] = React.useState<IYoutube[]>([]);
  const [loading, setLoading] = React.useState(true);

  const saveVideos = (snippet: IYoutube[]) => {
    setItems(snippet);
  };
  const addVideos = (snippet: IYoutube[]) => {
    setItems([...items, ...snippet]);
  };
  const setLoad = (loading: boolean) => {
    setLoading(loading);
  }
  return <YoutubeContext.Provider value={{ items, saveVideos, addVideos, setLoad }}>{children}</YoutubeContext.Provider>;
};

export default YoutubeProvider;