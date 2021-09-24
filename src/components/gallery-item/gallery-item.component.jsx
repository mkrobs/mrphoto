import React from 'react';
import { withRouter } from 'react-router-dom';

import './gallery-item.styles.scss'

const GalleryItem = ( {title, subtitle, imageUrl, size, history }) => (
  <div className='gallery-main'>
   <div 
    style={{
      backgroundImage: `url(&{imageUrl})`
    }}
    className='gallery-item' />     
    <div className='content'>
    
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>{subtitle}</span>
    </div>
  </div>
)

export default withRouter(GalleryItem);