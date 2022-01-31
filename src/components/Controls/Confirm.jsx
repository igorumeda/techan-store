import { useContext } from 'react'
import Context from '../../Context'

import { MdClose } from 'react-icons/md'
import './styles.css'

export default function Confirm(){

    const [confirm, setConfirm] = useContext(Context);

    function confirmed(){

        setConfirm({
            titulo: '',
            pergunta: '',
            visivel: false,
            result: true,
        })

    }

    function closed(){

        setConfirm({
            titulo: '',
            pergunta: '',
            visivel: false,
            result: false,
        })

    }

    return(

        <>
            <div className={`confirm-shadow ${ confirm.visivel ? 'visible' : 'invisible'}`}>
                <div className={`confirm transition-all transform  ${ confirm.visivel ? 'translate-y-0' : 'translate-y-6'}`}>
                    
                    <div>
                    <h1>{ confirm.titulo }</h1>
                    <button className='btn-close' onClick={closed}><MdClose size={20} color='white' /></button>
                    </div>
                    
                    <p>{ confirm.pergunta }</p>
                    
                    <span>
                        <button className='btn-success' onClick={confirmed}>Confirmar</button>
                    </span>

                </div>
            </div>
        </>

    )

}