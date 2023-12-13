import { useState, useEffect } from "react";

const MiApi = ({setInfo, setInfo1, setMensaje, setColor}) => {

    useEffect (() => {
        consultarApi();
    },[]);

    const consultarApi = async () => {
        try{
            const respuesta = await fetch ("https://restcountries.com/v3.1/region/america");
            const data = await respuesta.json();

            // Ordeno alfabeticamente, con el método 'sort()', el arreglo obtenido desde la API 
            data.sort((a, b) => {
            const a1 = a.name.official;
            const b1 = b.name.official;

            return (a1.localeCompare(b1));
            })

            // Info e Info1 son estados usados para el renderizado: uno para guardar la información obtenida y otro para filtrar en la busqueda.
            setInfo(data);
            setInfo1(data);
            setMensaje("")
            setColor("")

        }catch {
            // Mensaje para avisar que hubo un problema con el llamado a la API
            setMensaje("There was an error")
            setColor("danger")
        }
    }
    
    
    
    return(
        <>
        </>
    );
}

export default MiApi;