import React from 'react';
import Result from '../contenedor/Result';

const Botones = ( {className, id, value, handleAdd} ) => {

    return(
        <button onClick={handleAdd } 
                className={className} 
                id={id}>
                   {value}
        </button>
    )
}

export default Botones;