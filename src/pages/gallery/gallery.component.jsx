import React from 'react';

import SHOP_DATA from './gallery.data'; 

import AlbumPreview from '../../components/album-preview/album-preview.component';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const {collections} = this.state;
        return (<div className='shop-page'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <AlbumPreview key={id}  {...otherCollectionProps} />
              ))
            }
        </div>
            
        
        );
    }

}


export default Gallery;

