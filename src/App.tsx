import { useEffect, useState, useContext } from 'react';
import { getInitial } from './api';
import { YoutubeContext } from './context/YoutubeContext';
import { YoutubeContextType, IYoutube } from './@types/youtube';

import './App.css';
import Home from './pages/Home';

export const App: React.FC = () => {

  // const [items, setItems] = useState([]);
  const { saveVideos, setLoad } = useContext(YoutubeContext) as YoutubeContextType;


  useEffect(() => {
    getInitial().then(data => {
      console.log(data);
      saveVideos(data);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setLoad(false);
    })
  } , []);

  return (
      <Home />
  );
}