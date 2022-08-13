import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import FilterIcon from '../../assets/filter-results-button.png'
import './Filter.css'

export default function Filter({number} : {number: number}) {

  const matches = useMediaQuery('(max-width: 768px)')

  return (
    <div className="filter">
      {
        matches ? (
          <div className="filter-direct-button">
            <select id="number" name="number">
              <option value="">All</option>
              <option value="3000">3000</option>
            </select>
            <select id="time" name="time">
              <option value="">Any Time</option>
            </select>
          </div>
        ) : (
          <>
            <div className="items-number">
              <span>About {number} Filtered Results</span>
            </div>
            <div className="filter-button">
              <button>
                <img src={FilterIcon} alt="filter button" className="h80" />
                Filter
                </button>
            </div>
          </>
        )}
    </div>
  )
}
