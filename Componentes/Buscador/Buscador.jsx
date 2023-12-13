import { useEffect, useState } from "react";

const Buscador = ({directriz, setInfo1, info, indice, setMensaje, setColor}) => {


// UseEffect para usar la función busqueda cuando se monta el componente y cuando se actualiza el estado directriz (estados que capta lo ingresado por el usuario en el formulario).
useEffect(()=>{
    Busqueda();
},[directriz])

// Arreglo para actualizar, mediante info1, el arreglo filtrado segun criterio ingresado.
let arreglo = [];

const Busqueda = () => {

    // En cada opción, ademas de normalizar los caracteres para su comparación, accedo al valor que necesito con diferente funciones ya que el objeto que recibo de la API tiene mezclas entre arreglo, objetos y arreglo de objetos en diferente niveles. Posteriormente, actualizo el estado para renderizar y/o mostrar un aviso según corresponda.

    if(indice == "0"){
        arreglo = info.filter(x => x.name.official.toLowerCase().includes(directriz.toLowerCase()));
        setInfo1(arreglo);
        setMensaje("Coincidences")
        setColor("success")
    }
    if(indice == "1"){
        arreglo = info.filter(x => Object.values(x.capital)[0].toLowerCase().includes(directriz.toLowerCase()));
        setInfo1(arreglo);
        setMensaje("Coincidences")
        setColor("success")
    }
    if(indice == "2"){
        arreglo = info.filter(x => Object.values(x.languages)[0].toLowerCase().includes(directriz.toLowerCase()));
        setInfo1(arreglo);
        setMensaje("Coincidences")
        setColor("success")
    }
    if(indice == "3"){
        arreglo = info.filter(x => Object.values(x.demonyms)[0].f.toLowerCase().includes(directriz.toLowerCase()));
        setInfo1(arreglo);
        setMensaje("Coincidences")
        setColor("success")
    }
    if(directriz == "" || (directriz != 0 && arreglo.length == 0)){
        setMensaje("")
        setColor("")
    }
    if(directriz != 0 && arreglo.length == 0){
        setMensaje("No matches")
        setColor("danger")
    }

}
 

return(
        <>
        </>
    );
}
export default Buscador;