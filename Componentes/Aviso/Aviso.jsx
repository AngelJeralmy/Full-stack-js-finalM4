import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Aviso = ({mensaje, color}) => {


  return (
    <div style={{width:"100%", height:"60px"}} className='mb-2'>
        <Alert variant={color} style={{width:"100%", height:"100%", paddingTop:"10px"}}>
            <h3 style={{padding:"0"}}>
                {mensaje}
            </h3>
        </Alert>
    </div>
  )
}
export default Aviso;
