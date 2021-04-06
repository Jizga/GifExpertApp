import React from 'react'


//Propiedades de las img enviadas por props y destructuradas
export const GifGridItem = ( {title, url} ) => {

    return (
        <div className="card animate__animated animate__fadeInLeft">
            <img src={ url } alt={ title }></img>
            <p>{ title }</p>
        </div>
    )
}
