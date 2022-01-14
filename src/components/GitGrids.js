import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem' 



export const GitGrids = ({ category }) => {

    const {data:imagenes, loading} =useFetchGifs(category);



    return (
        <>
            <h1>{category}</h1>

            { loading && 'Cargando datos..'}

            <div className="card">
                {
                imagenes.map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))
                }
            </div>
           
        </>
    )
}
