import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdEdit, MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { removeAcentos } from '../../services/global';
import EntityContext from '../../providers/Entity';
import Title from '../../components/Title';
import Loading from '../../components/Controls/Loading';

import './styles.css';

export default function Clientes(){

    const { entity } = useContext(EntityContext);

    const [loading, setLoading] = useState(false);
    const [listaOriginal, setListaOriginal] = useState([]);
    const [lista, setLista] = useState([]);

    useEffect(()=>{

        async function carrega(){

            setLoading(true);
    
            await api.get(`/cliente?entity=${entity}`)
                .then(item => {
                    setListaOriginal(item.data.rows);
                    setLista(item.data.rows);
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    toast.error('Algo deu errado');
                    setLoading(false);
                })
    
        }

        carrega();

    }, []);

    function atualizaBusca(input){

        let param = removeAcentos(input).trim();

        if(param){

            let array = [];

            listaOriginal.forEach(item => {

                if(
                    removeAcentos(item.nuCpfCnpj).toString().includes(param.toLowerCase()) ||
                    removeAcentos(item.dsNome).toLowerCase().includes(param.toLowerCase()) ||
                    removeAcentos(item.dsEmail).toLowerCase().includes(param.toLowerCase())
                ){
                    array.push(item)
                }
            })
    
            setLista(array);

        }else{
            setLista(listaOriginal);
        }
        
    }

    return(
        <div>

            <Title titulo="Clientes" />

            <div className='contentData'>

                <div className='boxClean'>
                    <Link to='/clientes/new' className='btn'>Novo cliente</Link>
                </div>

                <div className='box filtro'>
                    <input type="text" placeholder='O que está procurando?' onChange={(e) => { atualizaBusca(e.target.value) }} />
                </div>

                <div className='box'>

                    <h1>Lista de clientes</h1>

                    <table className='table-list'>
                        <thead>
                            <tr>
                                <th className=''>CPF/CNPJ</th>
                                <th className=''>Nome</th>
                                <th className=''>Email/Telefone</th>
                                <th className='right'>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista?.length > 0 ?
                                lista.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <td className='' data-label='CPF/CNPJ'>{item.nuCpfCnpj}</td>
                                            <td className='' data-label='Nome'>{item.dsNome}</td>
                                            <td className='' data-label='Email/Telefone'>
                                                {item.dsEmail}<br/>
                                                {item.nuTelefone}
                                            </td>
                                            <td className='right'>
                                                <div className='flex justify-end min-w-max'>
                                                    <Link to={`/clientes/edit/${item.codigo}`} className='btn mr-1'>
                                                        <MdSearch size={20} />
                                                    </Link>
                                                    <Link to={`/clientes/edit/${item.codigo}`} className='btn-edit mr-1'>
                                                        <MdEdit size={20} />
                                                    </Link>
                                                    <button className='btn-delete'>
                                                        <MdDelete size={20} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }) 
                                :loading
                                    ? <tr><td colSpan='3'><Loading /></td></tr> 
                                    : <tr><td colSpan='3'><p className='obs p-2 text-left md:text-center'>Nenhum resultado encontrado</p></td></tr>
                            }
                        </tbody>
                    </table>
                    
                </div>

            </div>

        </div>
    )
}