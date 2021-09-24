import React from 'react';

import './directory.styles.scss'

import GalleryItem from '../gallery-item/gallery-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'landscape',
                subtitle: 'description1',
                imageUrl: './gallery/landscape/photo1.png',
                id: 1
            },
            {
                title: 'landscape2',
                subtitle: 'description2',
                imageUrl: './gallery/landscape2/photo1.png',
                id: 1
            },
            {
                title: 'landscape3',
                subtitle: 'description3',
                imageUrl: './gallery/landscape3/photo1.png',
                id: 1
            },
            {
                title: 'landscape4',
                subtitle: 'description4',
                imageUrl: './gallery/landscape4/photo1.png',
                id: 1
            },
            {
                title: 'landscape5',
                subtitle: 'description5',
                imageUrl: './gallery/landscape5/photo1.png',
                id: 1
            }]
        }
    }

    render() {
        return (
            <div className='directory-gallery'>
                 {this.state.sections.map(({ title, imageUrl, id, subtitle }) => (
                     <GalleryItem key={id} title={title} imageUrl={imageUrl} subtitle={subtitle} />
                 ))}
            </div>
        )
    }

}; 

export default Directory;