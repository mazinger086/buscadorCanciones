import React, {Fragment} from 'react';

const Cancion = ({letra, error}) => {

  if(letra.length === 0 && error === false) {
        return null;  
  } 

    return( 
        <Fragment>
        <h2>Letra Cancion</h2>         
        { error ? <p className="alert alert-danger text-center p-2">Hubo un error en la busqueda</p> : <p className="letra">{letra}</p> } 
        </Fragment>
     )
};

 
export default Cancion;