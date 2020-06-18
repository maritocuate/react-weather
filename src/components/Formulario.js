import React, {useState} from 'react';

const Formulario = () => {

    const [location, saveLocation] = useState({
        ciudad: '',
        pais: ''
    })

    const changeLocation = e => {
        saveLocation({
            ...location,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form>
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
        </form>
    );
}
 
export default Formulario;