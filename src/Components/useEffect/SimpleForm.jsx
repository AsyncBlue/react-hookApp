import { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        //console.log('HEY!')
    }, [] );

    useEffect( () => {
        //console.log('Form state cambio!')
    }, [ formState ] );

    useEffect( () => {
        //console.log('EMAIL cambio!')
    }, [ email ] );

    const handleInputChange = ( { target } ) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    return (
        <>
            <h1> useEffect </h1>
            <hr />

            <div className='form-group'>
                <input type="text"
                       name="name"
                       className="form-control"
                       placeholder="Tu Nombre"
                       autoComplete="off"
                       value={ name }
                       onChange={ handleInputChange }
                />
            </div>

            <div className='form-group'>
                <input type="text"
                       name="email"
                       className="form-control"
                       placeholder="email@gmail.com"
                       autoComplete="off"
                       value={ email }
                       onChange={ handleInputChange }
                />
            </div>

            { ( name === '123' ) && <Message /> }

        </>
    )
}
