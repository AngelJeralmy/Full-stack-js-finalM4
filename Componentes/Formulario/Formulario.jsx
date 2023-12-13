import Form from 'react-bootstrap/Form';
import { useState } from 'react';


const Formulario = ({setdirectriz, setIndice}) => {

    const CriteriosDeBusqueda =
    [
        'Country name',
        'Capital',
        'Language',
        'Demonym'
    ];

    // Estados necesarios para desabilitar los inputs
    const [valoresInputs, setValoresInputs] = useState(["","","",""]);
    const [visible, setVisible] = useState(false);

   
    // Función para capturar cada digito ingresado y hallar posibles coincidencias
    const CapturarCambio = (e, i) => {
        
    //Se crea una copia para poder guardar y actualizar el estado
    const copiavaloresInputs = [...valoresInputs];
    copiavaloresInputs[i] = e.target.value;

    // Se actualiza el estado
    setValoresInputs(copiavaloresInputs);

    // Se envía el digito ingresado y el indice del criterio (input de entrada) 
    setdirectriz(e.target.value);
    setIndice(i)
    

    // Parte de la condición para deshabilitar los inputs no usados
    if(e.target.value.length > 0)
        setVisible(true);
    else
        setVisible(false);
}

    return(
        <>
           <section style={{width:"100%"}}>
                <h3>
                    Search options
                </h3>
                <Form>
                    {valoresInputs.map((valor, indice) => 
                    (
                    <Form.Group key={indice} className='mt-1 mb-1'>
                        <Form.Control 
                            name={CriteriosDeBusqueda[indice]} 
                            value={valor} 
                            
                            // Condición para deshabilitar los inputs no usados
                            disabled={visible && valor.length === 0} 

                            placeholder={CriteriosDeBusqueda[indice]}
                            onChange={(e) =>{CapturarCambio(e, indice)}}
                        />
                    </Form.Group>))}
                </Form>
           </section>
        </>
    );
}
export default Formulario;