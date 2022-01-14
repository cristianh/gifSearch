import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    return (
        <div>
            <img className="card__img animate__animated animate__flipInX" src={url} alt={title}/>
        </div>
    )
}
