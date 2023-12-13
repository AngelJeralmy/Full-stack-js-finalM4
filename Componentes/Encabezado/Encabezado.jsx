import React from 'react'

const Encabezado = () => {
    return (
        <div className='mb-3 pt-3 encabezado'>
            <h1>American countries API</h1>
            <p>This project is inspired on <a href="">restcountries.eu</a> by Fayder Florez. Although the original     project has now moved to a subscription base API, this project is still Open Source and Free to use.
            
            You can access API through <a href="https://restcountries.com/v3.1/all">https://restcountries.com/v3.1/all</a> but in order to get a faster response, you should filter the results by the fields you need.
            </p>
        </div>
    )
}
export default Encabezado;
