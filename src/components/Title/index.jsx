import { useContext } from 'react'
import Context from '../../Context'

import { MdHomeFilled, MdCompareArrows, MdGroup, MdSupervisedUserCircle, MdDescription } from 'react-icons/md'
import './styles.css'

export default function Title(props){

    const [currentPage] = useContext(Context);

    function iconReturn() {

        switch (currentPage) {
            case 'PaginaInicial': return <MdHomeFilled size={40} />
            case 'Movimentacoes': return <MdCompareArrows size={40} />
            case 'Clientes': return <MdGroup size={40} />
            case 'Usuarios': return <MdSupervisedUserCircle size={40} />
            default: return <MdDescription size={40} />
        }

    }

    return(
        <div className="titulo">
            
            <div>
                { iconReturn() } 
            </div>
            
            <h1>{ props.titulo }</h1>

        </div>
    )
}

