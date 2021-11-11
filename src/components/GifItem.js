import React from 'react'

export const GifItem = ({ gif }) => {
  const { title, url } = gif;
  return (
    <div className="card animate__animated animate__zoomIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
