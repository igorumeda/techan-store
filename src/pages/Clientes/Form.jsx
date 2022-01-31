import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../../Context'

import { Switch } from '@headlessui/react'

import { MdArrowBack } from 'react-icons/md'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react/cjs/react.development'

import Title from '../../components/Title'
import Confirm from '../../components/Controls/Confirm'
import './styles.css'

export default function ClienteForm(){

    const navigate = useNavigate();
    const [confirm, setConfirm] = useContext(Context);

    const [nuCpfCnpj, setNuCpfCnpj] = useState('');
    const [dsNome, setDsNome] = useState('');
    const [dsNomeFantasia, setDsNomeFantasia] = useState('');
    const [dsEmail, setDsEmail] = useState('');
    const [nuTelefone, setNuTelefone] = useState('');
    const [nuCelular, setNuCelular] = useState('');
    const [flWhatsapp, setFlWhatsapp] = useState(false);
    const [nuCep, setNuCep] = useState('');
    const [dsEndereco, setDsEndereco] = useState('');
    const [dsBairro, setDsBairro] = useState('');
    const [dsCidade, setDsCidade] = useState('');
    const [dsUf, setDsUf] = useState('');
    const [dsComplemento, setDsComplemento] = useState('');

    useEffect(()=>{
        
        if(confirm.result === true){
            setConfirm({ result: false })
            navigate(-1);
        }

    }, [confirm, navigate, setConfirm])

    function openConfirm(){

        setConfirm({
            titulo: 'Cancelar',
            pergunta: 'Deseja voltar para a lista?',
            visivel: true,
            result: false
        })

    }

    function handleSubmit(e){

        e.preventDefault();
        console.log(flWhatsapp);
        toast.success('Salvo com sucesso');

    }

    return(
        <div>

            <Confirm />
            
            <div className='contentData'>
                <button className='btn-back' onClick={openConfirm}>
                    <MdArrowBack size={20} /> Voltar
                </button>
            </div>

            <Title titulo="Formulário do cliente" />

            <div className='contentData'>

                <div className='box'>
                    
                    <form onSubmit={handleSubmit}>

                        <table className='table-form'>
                            <tbody>

                                <tr>
                                    <td>
                                        <label>CPF / CNPJ</label>
                                        <input type='text' value={nuCpfCnpj} onChange={(e) => setNuCpfCnpj(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan='3'>
                                        <label>Nome</label>
                                        <input type='text' value={dsNome} onChange={(e) => setDsNome(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan='3'>
                                        <label>Apelido / Nome Fantasia</label>
                                        <input type='text' value={dsNomeFantasia} onChange={(e) => setDsNomeFantasia(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan='3'>
                                        <label>Email</label>
                                        <input type='text' value={dsEmail} onChange={(e) => setDsEmail(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Telefone</label>
                                        <input type='text' value={nuTelefone} onChange={(e) => setNuTelefone(e.target.value)} />
                                    </td>
                                    <td>
                                        <label>Celular</label>
                                        <input type='text' value={nuCelular} onChange={(e) => setNuCelular(e.target.value)} />
                                    </td>
                                    <td>
                                        <label>Celular é Whatsapp?</label>
                                        <div>
                                            <Switch checked={flWhatsapp} onChange={setFlWhatsapp} className={`${flWhatsapp ? 'bg-slate-600' : 'bg-gray-200'} relative inline-flex items-center h-6 rounded-full w-11`}>
                                                <span className="sr-only">Enable notifications</span>
                                                <span className={`${ flWhatsapp ? 'translate-x-6' : 'translate-x-1' } inline-block w-4 h-4 transform bg-white rounded-full transition-all`} />
                                            </Switch>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>CEP</label>
                                        <input type='text' value={nuCep} onChange={(e) => setNuCep(e.target.value)} />
                                        <a href="#" className='text-sky-700'> Não sei meu CEP </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3">
                                        <label>Endereço</label>
                                        <input type='text' value={dsEndereco} onChange={(e) => setDsEndereco(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Bairro</label>
                                        <input type='text' value={dsBairro} onChange={(e) => setDsBairro(e.target.value)} />
                                    </td>
                                    <td>
                                        <label>Cidade</label>
                                        <input type='text' value={dsCidade} onChange={(e) => setDsCidade(e.target.value)} />
                                    </td>
                                    <td>
                                        <label>UF</label>
                                        <input type='text' value={dsUf} onChange={(e) => setDsUf(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3" >
                                        <label>Complemento</label>
                                        <input type='text' value={dsComplemento} onChange={(e) => setDsComplemento(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type='submit' onSubmit={handleSubmit} className='btn max-w-min'>Salvar</button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </form>

                </div>

            </div>

        </div>
    )
}