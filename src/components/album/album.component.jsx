import React from 'react';

import './album.styles.scss';

import AlbumItem from '../album-item/album-item.component';



class Album extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
            {
                title: 'landscape',
                imageUrl: 'http://www.mikaelr.com/wp-content/uploads/2019/05/%C3%85AS-1.jpg',
                subtitle: 'description1',
                size: 'large',
                id: 1,
                linkUrl: 'landscape1'
            },
            {
                title: 'landscape2',
                imageUrl: 'http://www.mikaelr.com/wp-content/uploads/2019/05/bild-0001.jpg',
                subtitle: 'description2',
                size: 'large',
                id: 2,
                linkUrl: 'landscape2'
            },
            {
                title: 'landscape3',
                imageUrl: 'http://www.mikaelr.com/wp-content/uploads/2019/05/picture-0001-14.jpg',
                subtitle: 'description3',
                size: 'large',
                id: 3,
                linkUrl: 'landscape3'
            },
            {
                title: 'landscape4',
                subtitle: 'description4',
                imageUrl: 'http://www.mikaelr.com/wp-content/uploads/2019/05/picture-0001-20.jpg',
                size: 'large',
                id: 4,
                linkUrl: 'landscape4'
            },
            {
                title: 'landscape5',
                subtitle: 'description5',
                imageUrl: 'http://www.mikaelr.com/wp-content/uploads/2019/05/landscape-13.jpg',
                size: 'large',
                id: 5,
                linkUrl: 'landscape5'
            }
          ]
        };
    }

    render() {
        return (
            <div className='album-gallery'>
                 {this.state.sections.map(({ id, ...otherSectionProps }) => (
                     <AlbumItem key={id} {...otherSectionProps} />
                 ))}
            </div>
        );
    }

}

export default Album;