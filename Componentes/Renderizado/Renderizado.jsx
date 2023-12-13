import React from 'react';
import {Card}  from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


const Renderizado = ({info1}) => {


  const formato = {
    style:'decimal',
    useGrounping:true,
    minimunFractionDigits:1,
    maximunFractionDigits:1
  };
 
  return (
    <>
                <div className='renderizado'>
                    {info1.map((pais, indice) => (
                        <Card key={indice} className="mt-4 mb-4 cardrenderizado" >
                            <Card.Img variant="top" src={pais.flags.png} className='cardimgrenderizado'/>
                            <Card.Body  style={{height:"25%", width:"100%"}}>
                                <Card.Title>
                                    {/* Se muestra cada país por su nombre oficial */}
                                    {pais.name.official}
                                </Card.Title>
                            </Card.Body>
                            <ListGroup style={{height:"35%", width:"100%"}} className="list-group-flush">
                                <ListGroup.Item>
                                    {/* Un operador ternario ya que hay algunos paises sin capital oficial según lo proporcionado por esta API */}
                                    Capital: {pais.capital && pais.capital.length > 0 ? pais.capital[0] : 'Not defined'}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {/* Algunas funciones para dar manejos a las operaciones con decimales y otras para usar la notación local con el proposito de hacer la cantidad no tan extensa, sin dejar de ser exacta en cuanto a la cantidad de habitantes por país */}
                                    Population: {pais.population > 1000000 ? (parseFloat(pais.population / 1000000).toLocaleString('en-US', formato) + 'M') : (parseFloat(pais.population / 1000).toLocaleString('en-US', formato) + 'K')}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {/* Accedemos y mostramos el idioma de cada país */}
                                    Language: {(Object.values((pais.languages))[0])}
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    ))}
                </div>
    </>
  )
}

export default Renderizado;