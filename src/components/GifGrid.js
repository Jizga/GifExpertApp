import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGif(category);


    return (
        <>
        <h3 className="animate__animated animate__bounceIn text-category">{ category }</h3>
        <hr/>
        {/* Si es true aparece el loadin, si no, no hace nada */}

        { loading && <p className="animate__animated animate__flash">Cargando...</p> }

        <div className="card-grid">
            {images.map(img => (
                <GifGridItem { ...img } key={ img.id }/>
            ))}
        </div>
        <hr/>
        </>
    )
}
