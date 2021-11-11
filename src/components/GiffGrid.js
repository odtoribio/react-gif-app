import React from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GiffGrid = ( { category } ) => {

  const { data:gifs, loading } = useFetchGifs(category)

  return (
    <>
      <h3>{ category }</h3>
      { loading && 'Loading...' }
      <div className="card-grid">
          {
            gifs.map( gif => (
              <GifItem 
                key={gif.id} 
                gif={ gif }
              />
            ))
          }
      </div>
    </>
  )
}
