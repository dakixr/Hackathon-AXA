import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

function  Altas(){
  return (

    <><><><h2>Alta de proovedor de Asistencia Sanitaria </h2>

      <form className="formulario altas" noValidate autoComplete="off">
        <TextField id="standard-basic" label="CIF" />
        <TextField id="filled-basic" label="Dirección" />
        <TextField id="outlined-basic" label="Provincia" />

        <TextField id="standard-basic" label="Persona de Contacto" />
        <TextField id="filled-basic" label="Tipo de Proveedor" />
        <TextField id="outlined-basic" label="Nombre completo" />

        <TextField id="standard-basic" label="Población " />
        <TextField id="filled-basic" label="Código postal" />
        <TextField id="outlined-basic" label="Email" />

      </form></>

      <Button variant="contained" color="primary">
        Especialidad**
      </Button>

      <Button variant="contained" color="primary">
        Guardar y salir*
      </Button></>
      <h6>*Volverás a la pantalla especificada en la slide 1 </h6>
      <h6>**Irás a la pantalla especificada en la slide 7 </h6></>

  );
}

ReactDOM.render(<Altas />, document.querySelector('#app'));