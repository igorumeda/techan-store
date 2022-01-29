import { useState, useEffect } from 'react';
import api from '../../services/api'
import { toast } from 'react-toastify';
import { removeAcentos } from '../../services/global'
import { MdSearch, MdEdit, MdDelete } from 'react-icons/md'

import Title from '../../components/Title'

import './styles.css'
import { Link } from 'react-router-dom';

export default function Clientes(){

    const [listaOriginal, setListaOriginal] = useState([]);
    const [lista, setLista] = useState([]);

    useEffect(()=>{

        async function carrega(){
    
            await api.get('/cliente')
                .then(item => {
                    setListaOriginal(item.data);
                    setLista(item.data);
                })
                .catch(err => {
                    console.log(err);
                    toast.error('Algo deu errado');
                })
    
        }

        carrega();

    }, []);

    function atualizaBusca(input){

        let value = '';
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
                    <Link to='/clientes/1' className='btn'>Novo cliente</Link>
                </div>

                <div className='box filtro'>
                    <input type="text" placeholder='O que está procurando?' onChange={(e) => { atualizaBusca(e.target.value) }} />
                </div>

                <div className='box'>

                    <h1>Lista de clientes</h1>

                    <table>
                        <thead>
                            <tr>
                                <th className=''>CPF/CNPJ</th>
                                <th className=''>Nome</th>
                                <th className=''>Email/Telefone</th>
                                <th className='right'>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td className='' data-label='CPF/CNPJ'>{item.nuCpfCnpj}</td>
                                        <td className='' data-label='Nome'>{item.dsNome}</td>
                                        <td className='' data-label='Email/Telefone'>
                                            {item.dsEmail}<br/>
                                            {item.nuTelefone}
                                        </td>
                                        <td className='right' data-label='#'>
                                            <div className='block min-w-max'>
                                                <button className='btn mr-1'>
                                                    <MdSearch size={20} />
                                                </button>
                                                <button className='btn-edit mr-1'>
                                                    <MdEdit size={20} />
                                                </button>
                                                <button className='btn-delete'>
                                                    <MdDelete size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}