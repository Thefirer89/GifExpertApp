import React from 'react';
import GifGridItem from './GifGridItem';
import '../index.css';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({category}) =>{

    const {images, loading} = useFetchGifs(category);
   
    return(
        <>
            <h2>{category}</h2>
            {loading&&<p className='animate__animated animate__flash'>Loading...</p>}

            <div className="card-grid">
                {
                    images.map(img =>
                        <GifGridItem key={img.id} {...img} />
                    )
                }
            </div>
        </>
    );
}

export default GifGrid;