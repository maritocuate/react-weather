import React, {useState} from 'react';

const Formulario = ({saveQuery}) => {

    const [location, saveLocation] = useState({
        ciudad: '',
        pais: ''
    })
    const {ciudad, pais} = location

    const [error, saveError] = useState(false)

    const changeLocation = e => {
        saveLocation({
            ...location,
            [e.target.name] : e.target.value
        })
    }

    const sendForm = e => {
        e.preventDefault()

        //valida
        if(ciudad.trim()==='' || pais===''){
            saveError(true)
        }else{
            saveError(false)

            saveQuery(location)
        }
    }

    return (
        <form onSubmit={sendForm}>
            {error && <p className='red darken-4 error'>Todos los campos son obligatorios</p>}

            <div className='input-field col s12'>
                <input type='text' name='ciudad' id='ciudad' onChange={changeLocation}/>
                <label htmlFor='ciudad'>ciudad</label>
            </div>

            <div className='input-field col s12'>
                <select name='pais' id='pais' onChange={changeLocation}>
                    <option value=''>seleccione un pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor='pais'>pais</label>
            </div>

            <div className='input-field col s12'>
                <input
                    type='submit'
                    value='Buscar Clima'
                    className='waves-effect waves-light btn-large btn-block yellow accent-4'
                />
            </div>
        </form>
    );
}
 
export default Formulario;