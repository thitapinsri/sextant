import './Banner.css';

import React from 'react'

function Banner({bannerText}) {
  return (
    <div className="Banner">
        <h1>{bannerText}</h1>
    </div>
  )
}

export default Banner
