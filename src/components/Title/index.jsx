import { MdHomeFilled, MdCompareArrows, MdGroup, MdSupervisedUserCircle, MdOutlineLogout } from 'react-icons/md'
import './styles.css'

export default function Title(props){
    return(
        <div className="titulo">
            <div><MdHomeFilled size={40} /></div>
            <h1>{ props.titulo }</h1>
        </div>
    )
}

