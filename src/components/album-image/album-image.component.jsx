import React from 'react';

import './album-image.styles.scss';

const AlbumImage = ({ id, name, desc, imageUrl }) => (
    <div className='album-image'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
        <div className='album-footer'>
            <span className='name'>{ name }</span>
            <span className='desc'>{ desc }</span>
        </div>
    </div>
);

export default AlbumImage;