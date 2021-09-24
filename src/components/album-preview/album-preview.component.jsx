import React from 'react';

import AlbumImage from '../album-image/album-image.component';

import './album-preview.styles.scss';

const AlbumPreview = ({ title, items }) => (
    <div className='album-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps }) => (
                    <AlbumImage key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)

export default AlbumPreview;