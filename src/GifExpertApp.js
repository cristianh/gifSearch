import React, { Component, useState } from 'react';
import { AppCategorys } from './components/AppCategorys';
import { GitGrids } from './components/GitGrids';


export const GitExpertApp = () => {

    /*  const categorias=[
         'One Punch',
         'Goku'
     ] */

    const [categorias, setCategorias] = useState([
        'pikachu'
    ]);

    //setCategorias(cat => ['nuevo',...cat])

    return (
        <>
            <h2>Gif App expert</h2>
            <AppCategorys setCategoria={setCategorias} />
            <hr />
           {/*  <button onClick={() => setCategorias([, ...categorias])}>Agregar</button> */}
            
                {
                    categorias.map((categoria) => (
                         <GitGrids key={categoria} category={categoria} />
                    ))
                }
            
        </>
    )

}

