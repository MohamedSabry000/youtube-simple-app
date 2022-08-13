import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { IYoutube } from '../../@types/youtube'

interface IListItemProps {
  item: IYoutube
}

export default function ListItem({ item }: IListItemProps) {

  const matches = useMediaQuery('(max-width: 768px)')

  const decodeEntity = (inputStr: string) => {
    var textarea = document.createElement("textarea");
    textarea.innerHTML = inputStr;
    // console.log(textarea.value);
    return textarea.value;
}

  return (
    <>
      <div className="list-item-thumbnail">
        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
      </div>
      <div className="list-item-content">
        <h3 className='list-item-content-title'>{decodeEntity(item.snippet.title)}</h3>
        <p className='list-item-content-short-info'>
          <span className='list-item-content-short-info-channel'>{decodeEntity(item.snippet.channelTitle)}</span>
          {/* <span className='list-item-content-short-info-views'>{item.statistics.viewCount}</span> */}
          <span className='list-item-content-short-info-published-at'>{item.snippet.publishedAt}</span>
        </p>
        {!matches && <p className='list-item-content-description'>{decodeEntity(item.snippet.description)}</p>}
      </div>
    </>
  )
}
