import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../Context'

import logo from '../../assets/name-techan-white.png'
import iconLogo from '../../assets/icon-techan-white.png'
import { MdMode, MdHomeFilled, MdCompareArrows, MdGroup, MdSupervisedUserCircle, MdOutlineLogout, MdMenu, MdArrowBack } from 'react-icons/md'
import './styles.css'

export default function Header(){

    const [statusMenu, setStatusMenu] = useState(false);
    const [currentPage, setCurrentPage] = useContext(Context);

    return(
        <div>
            <header className={`cabecalho ${statusMenu ? 'cabecalhoVisible' : 'cabecalhoInvisible'}`}>

                <section>

                    <div className="logo">
                        <img src={logo} alt="Logotipo techan" />
                        <h2>STORE</h2>
                    </div>

                    <div className='backMenuMobile'>
                        <button onClick={() => { setStatusMenu(false) }}>
                            <MdArrowBack color='white' size={25} />
                        </button>
                    </div>

                    <div className="perfil">
                        
                        <img className="" src="http://github.com/igorumeda.png" alt="Foto de perfil" />
                        <h3>Igor Umeda</h3>
                        <Link to='/'>
                            <MdMode color='white' size={15} />
                            Editar perfil
                        </Link>

                    </div>

                    <div className='menu'>

                        <h2>Menu</h2>

                        <ul>
                            <li className={ currentPage === 'PaginaInicial' && 'active' }>
                                <Link to={'/'} onClick={()=>{ setCurrentPage('PaginaInicial'); setStatusMenu(false); }} >
                                    <MdHomeFilled size={20}/> 
                                    Página inicial
                                </Link>
                            </li>
                            <li className={ currentPage === 'Movimentacoes' && 'active' }>
                                <Link to={'/movimentacoes'} onClick={()=>{ setCurrentPage('Movimentacoes'); setStatusMenu(false); }}>
                                    <MdCompareArrows size={20} />
                                    Movimentações
                                </Link>
                            </li>
                            <li className={ currentPage === 'Clientes' && 'active' }>
                                <Link to={'/clientes'} onClick={()=>{ setCurrentPage('Clientes'); setStatusMenu(false); }}>
                                    <MdGroup size={20} />
                                    Clientes
                                </Link>
                            </li>
                            <li className={ currentPage === 'Usuarios' && 'active' }>
                                <Link to={'/usuarios'} onClick={()=>{ setCurrentPage('Usuarios'); setStatusMenu(false); }}>
                                    <MdSupervisedUserCircle size={20} /> 
                                    Usuários
                                </Link>
                            </li>
                            <li>
                                <button>
                                    <MdOutlineLogout size={20} /> 
                                    Sair
                                </button>
                            </li>
                        </ul>

                    </div>

                </section>

                <section>

                    <div className='copyright'>
                        <img src={iconLogo} alt="Icone techan" />
                        <p>
                            2022 © Copyright 
                        </p>
                    </div>

                </section>

            </header>

            <header className='cabecalhoMobile'>
                
                <div className="logo">
                    <img src={logo} alt="Logotipo techan" />
                    <h2>STORE</h2>
                </div>

                <div className='menuMobile'>
                    <button onClick={() => { setStatusMenu(true); }}>
                        <MdMenu color='white' size={25} />
                    </button>
                </div>

            </header>

            <div className={`${statusMenu ? 'shadowScreen' : ''}`} onClick={() => setStatusMenu(false)} ></div>
        </div>
    )
}