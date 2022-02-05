import { MdHomeFilled, MdCompareArrows, MdGroup, MdSupervisedUserCircle, MdDescription } from 'react-icons/md'
import './styles.css'

export default function Title({ titulo }){

    function iconReturn() {

        switch (titulo) {
            case 'Dashboard': return <MdHomeFilled size={40} />
            case 'Movimentações': return <MdCompareArrows size={40} />
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
            
            <h1>{ titulo }</h1>

        </div>
    )
}

