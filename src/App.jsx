import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from '../Componentes/Buscador/Buscador';
import MiApi from '../Componentes/MiApi/MiApi';
import Formulario from '../Componentes/Formulario/Formulario';
import Renderizado from '../Componentes/Renderizado/Renderizado';
import {Container, Row, Col} from 'react-bootstrap';
import Aviso from '../Componentes/Aviso/Aviso';
import Encabezado from '../Componentes/Encabezado/Encabezado';
import Piedepagina from '../Componentes/Piedepagina/Piedepagina';



function App() {

  const [directriz, setdirectriz] = useState("");
  const [info, setInfo] = useState([]);
  const [info1, setInfo1] = useState([]);
  const [indice, setIndice] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [color, setColor] = useState("");
  


  return (
    <>
      <main className='principal'>
            <Encabezado />
            <MiApi 
                setInfo={setInfo} 
                setInfo1={setInfo1} 
                setMensaje={setMensaje} 
                setColor={setColor} 
            />
            <section className='container'>
                <div className='row'>
                    {/* Doy un poco de responsividad con la grilla de Bootstrap */}
                    <div className='offset-3 col-6 offset-sm-2 col-sm-8 offset-md-3 col-md-6 offset-lg-3 col-lg-6'>
                        <Formulario
                            setdirectriz={setdirectriz}
                            setIndice={setIndice}
                        />
                        <Buscador  
                            directriz={directriz}
                            setInfo1={setInfo1}
                            info={info}
                            indice={indice}
                            setMensaje={setMensaje}
                            setColor={setColor}
                        />
                        <Aviso
                            mensaje={mensaje}
                            color={color}
                        />
                    </div>
                </div>
            </section>
            <Renderizado 
                info1={info1} 
            />
            <Piedepagina />
      </main>
    </>
  )
}

export default App;
