import { useState, useCallback, useEffect } from 'react';
import InputMask from 'react-input-mask'

export function MaskInput({ name, ...props }){

    const [mask, setMask] = useState('');

    const keyUp = useCallback((e) => {
        
        if(name === 'cpfCnpj') {
            let value = e.target.value;
            if(value.toString().length < 15){
                setMask('999.999.999-999');
            }else{
                setMask('99.999.999/9999-99');
            }
        }
    
    }, [name]);

    useEffect(()=>{

        switch (name) {
            case 'cpfCnpj':
                setMask('999.999.999-999');
                break;
    
            case 'telefone':
                setMask('(99)9999-9999');
                break;
    
            case 'celular':
                setMask('(99)99999-9999');
                break;
    
            case 'cep':
                setMask('99999-999');
                break;
        
            default: break;
        }

    }, [name])

    return(
        <InputMask type='text' onKeyUp={keyUp} mask={mask} maskChar={null} { ...props } />
    )
}