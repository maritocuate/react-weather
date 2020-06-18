import React from 'react';
import PropTypes from 'prop-types'

const Resultado = ({result}) => {

    const {name, main} = result
    if(!name) return null

    //temperature
    const kelvin = 273.15
    const temp = parseFloat(main.temp-kelvin).toFixed(2)
    const tempMax = parseFloat(main.temp_max-kelvin).toFixed(2)
    const tempMin = parseFloat(main.temp_min-kelvin).toFixed(2)

    return (
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>{name}</h2>
                <p className='temperatura'>{temp} <span>&#x2103;</span> </p>
                <p>Temperatura Maxima: {tempMax}<span>&#x2103;</span> </p>
                <p>Temperatura minima: {tempMin}<span>&#x2103;</span> </p>
            </div>
        </div>
    );
}
 
Resultado.propTypes = {
    result: PropTypes.object.isRequired
}

export default Resultado;