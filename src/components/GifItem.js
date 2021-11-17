import React from 'react'
import PropTypes from 'prop-types';

export const GifItem = (props) => {
  const { title, url } = props;
  return (
    <div className="card animate__animated animate__zoomIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}


GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
