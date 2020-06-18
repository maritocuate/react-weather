import React, { Fragment, useState, useEffect } from 'react';

//components
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Error from './components/Error'

function App() {

  const [query, saveQuery] = useState({})
  const [result, saveResult] = useState({})
  const [error, saveError] = useState(false)

  useEffect(()=>{
    const consultarAPI = async () => {
      if( Object.keys(query).length===0 ) return
      const {ciudad, pais} = query

      const apiId = '2c196d97153c36863eff7e9358e88646'
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`

      const respuestaFetch = await fetch(url)
      const respuesta = await respuestaFetch.json()

      saveResult(respuesta)

      respuesta.cod==='404' ? saveError(true) : saveError(false)
    }
    consultarAPI()

  }, [query])


  let componenteResultado
  if(error){
    componenteResultado = <Error mensaje='Ciudad no encontrada'/>
  }else{
    componenteResultado = <Resultado result={result}/>
  }

  return (
    <Fragment>
      <Header titulo='Weather React App'/>

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario saveQuery={saveQuery}/>
            </div>
            <div className='col m6 s12'>
              {componenteResultado}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
