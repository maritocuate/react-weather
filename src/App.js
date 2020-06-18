import React, { Fragment, useState, useEffect } from 'react';

//components
import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {

  const [query, saveQuery] = useState({})
  

  useEffect(()=>{
    const consultarAPI = async () => {
      if( Object.keys(query).length===0 ) return
      const {ciudad, pais} = query

      const apiId = '2c196d97153c36863eff7e9358e88646'
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`

      const respuestaFetch = await fetch(url)
      const respuesta = await respuestaFetch.json()

      console.log(respuesta)
    }
    consultarAPI()

  }, [query])

  return (
    <Fragment>
      <Header titulo='Weather React App'/>

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario saveQuery={saveQuery}/>
            </div>
            <div className='col m6 s12'>2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
