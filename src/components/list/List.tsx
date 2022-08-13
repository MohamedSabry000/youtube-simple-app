import React, { useContext, useEffect, useState } from 'react'
import { YoutubeContextType } from '../../@types/youtube';
import { YoutubeContext } from '../../context/YoutubeContext';
import ListItem from './ListItem';
import './List.css';
import { useMediaQuery } from 'usehooks-ts';

export default function List() {
  const { items } = useContext(YoutubeContext) as YoutubeContextType;
  const [data, setData] = useState(items);
  const matches = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    console.log(items)
  } , [matches])

  return (
    <div className='list'>
      {
        items.map(item => (
          <div key={item.id.videoId || item.id.channelId} className="list-item">
            <ListItem item={item} />
          </div>
        ))
      }
    </div>
  )
}