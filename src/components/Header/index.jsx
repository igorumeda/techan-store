import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../../assets/name-techan-white.png'
import iconLogo from '../../assets/icon-techan-white.png'
import { MdMode, MdHomeFilled, MdCompareArrows, MdGroup, MdSupervisedUserCircle, MdOutlineLogout, MdMenu, MdArrowBack } from 'react-icons/md'
import './styles.css'

export default function Header(){

    const [statusMenu, setStatusMenu] = useState(false);

    function navActive(isActive) {
        return isActive ? 'bg-slate-800' : '';
    }

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
                            <li>
                                <NavLink to={'/'} className={({ isActive }) => navActive(isActive)} onClick={()=>{ setStatusMenu(false); }} >
                                    <MdHomeFilled size={20}/> 
                                    Página inicial
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/movimentacoes'} className={({ isActive }) => navActive(isActive)} onClick={()=>{ setStatusMenu(false); }}>
                                    <MdCompareArrows size={20} />
                                    Movimentações
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/clientes'} className={({ isActive }) => navActive(isActive)} onClick={()=>{ setStatusMenu(false); }}>
                                    <MdGroup size={20} />
                                    Clientes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/usuarios'} className={({ isActive }) => navActive(isActive)} onClick={()=>{ setStatusMenu(false); }}>
                                    <MdSupervisedUserCircle size={20} /> 
                                    Usuários
                                </NavLink>
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