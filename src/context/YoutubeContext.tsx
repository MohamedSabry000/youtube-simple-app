import * as React from 'react';
import { YoutubeContextType, IYoutube } from '../@types/youtube';

export const YoutubeContext = React.createContext<YoutubeContextType | null>(null);

const YoutubeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [items, setItems] = React.useState<IYoutube[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  const saveVideos = (snippet: IYoutube[]) => {
    setItems(snippet);
  };
  const addVideos = (snippet: IYoutube[]) => {
    setItems([...items, ...snippet]);
  };
  return <YoutubeContext.Provider value={{ items, loading, error, setError, saveVideos, addVideos, setLoading }}>{children}</YoutubeContext.Provider>;
};

export default YoutubeProvider;