import { useContext } from 'react'
import { YoutubeContextType } from '../../@types/youtube';
import { YoutubeContext } from '../../context/YoutubeContext';
import ListItem from './ListItem';
import './List.css';
import Filter from '../filter/Filter';

export default function List() {
  const { items } = useContext(YoutubeContext) as YoutubeContextType;

  return (
    <div className='list'>
      <Filter number={items.length} />
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