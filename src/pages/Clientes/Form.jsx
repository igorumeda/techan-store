import { useContext } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { EntityContext } from '../../providers/Entity'
import { ConfirmContext } from '../../providers/Confirm'

import { Switch } from '@headlessui/react'

import { MdArrowBack } from 'react-icons/md'
import { toast } from 'react-toastify'

import api from '../../services/api'
import { prepareValueToSave } from '../../services/global'
import { MaskInput } from '../../components/Controls/MaskInput'
import Title from '../../components/Title'
import Confirm from '../../components/Controls/Confirm'
import Loading from '../../components/Controls/Loading'

import './styles.css'

export default function ClienteForm(props){

    const { id } = useParams();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const mode = pathname.split('/')[2];

    const { entity } = useContext(EntityContext);
    const { confirm, setConfirm } = useContext(ConfirmContext);
    const [loading, setLoading] = useState(false);
    const [loadingBtn, setLoadingBtn] = useState(false);

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
        if(id > 0 || id !== undefined){
            loadForm();
        }
    }, [])

    useEffect(()=>{
        
        window.scrollTo(0, 0);

        if(confirm.result === true){
            setConfirm({ 
                titulo: '',
                pergunta: '',
                visivel: false,
                result: false
            });
            navigate('/clientes');
        }

    }, [confirm, navigate, setConfirm])

    const openConfirm = useCallback(()=>{

        setConfirm({
            titulo: 'Cancelar',
            pergunta: 'Deseja voltar para a lista?',
            visivel: true,
            result: false
        })

    }, [setConfirm]);

    async function loadForm(){

        setLoading(true);

        await api.get(`/cliente?entity=${entity}&filter=codigo:${id}`)
        .then(item => {

            let data = prepareValueToSave( item.data.rows[0] );
            setNuCpfCnpj(data.nuCpfCnpj);
            setDsNome(data.dsNome);
            setDsNomeFantasia(data.dsNomeFantasia);
            setDsEmail(data.dsEmail);
            setNuTelefone(data.nuTelefone);
            setNuCelular(data.nuCelular);
            setFlWhatsapp(data.flWhatsapp);
            setNuCep(data.nuCep);
            setDsEndereco(data.dsEndereco);
            setDsBairro(data.dsBairro);
            setDsCidade(data.dsCidade);
            setDsUf(data.dsUf);
            setDsComplemento(data.dsComplemento);

            setLoading(false);

        })
        .catch(err => {
            console.log(err);
            toast.error('Algo deu errado');
            setLoading(false);
        })

    }

    async function handleAdd(data){
        
        await api.post('/cliente', data)
            .then(() => {
                toast.success('Cliente salvo com sucesso');
                setLoadingBtn(false);
                navigate(-1);
            })
            .catch(err => {
                console.log(err);
                toast.error('Algo deu errado');
                setLoadingBtn(false);
            })

    }

    async function handleUpdate(data){
        
        await api.put('/cliente', data)
            .then(() => {
                toast.success('Cliente salvo com sucesso')
                setLoadingBtn(false);
                navigate(-1);
            })
            .catch(err => {
                console.log(err);
                toast.error('Algo deu errado');
                setLoadingBtn(false);
            })

    }

    async function getAddress(cep){

        if(cep !== ''){

            api.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then(item => {
                    
                    setDsEndereco(item.data.logradouro);
                    setDsBairro(item.data.bairro);
                    setDsCidade(item.data.localidade);
                    setDsUf(item.data.uf);

                })
                .catch(err => {
                    console.log(err);
                })

        }

    }

    function handleSubmit(e){

        e.preventDefault();

        setLoadingBtn(true);

        let campos = {
            nuCpfCnpj:      nuCpfCnpj,
            dsNome: 		dsNome,
            dsNomeFantasia: dsNomeFantasia,
            dsEmail:        dsEmail,
            nuTelefone:     nuTelefone,
            nuCelular:      nuCelular,
            flWhatsapp:     flWhatsapp,
            nuCep:          nuCep,
            dsEndereco:     dsEndereco,
            dsBairro:       dsBairro,
            dsCidade:       dsCidade,
            dsUf:           dsUf,
            dsComplemento:  dsComplemento
        }

        if(mode === 'new'){
            handleAdd(campos);
        }else{
            handleUpdate(campos);
        }

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

                    {loading ? 
                        <Loading />
                    :
                        <form onSubmit={handleSubmit}>

                            <table className='table-form'>
                                <tbody>

                                    <tr>
                                        <td>
                                            <label>CPF / CNPJ</label>
                                            <MaskInput name='cpfCnpj' value={nuCpfCnpj} onChange={(e) => setNuCpfCnpj(e.target.value)} />
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
                                            <input type='number' value={dsNomeFantasia} onChange={(e) => setDsNomeFantasia(e.target.value)} />
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
                                            <MaskInput type='text' name='telefone' value={nuTelefone} onChange={(e) => setNuTelefone(e.target.value)} />
                                        </td>
                                        <td>
                                            <label>Celular</label>
                                            <MaskInput type='text' name='celular' value={nuCelular} onChange={(e) => setNuCelular(e.target.value)} />
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
                                            <MaskInput type='text' name='cep' value={nuCep} onChange={(e) => setNuCep(e.target.value)} onBlur={(e) => getAddress(e.target.value)} />
                                            <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="blank" className='text-sky-700'> Não sei meu CEP </a>
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
                                        <td colSpan='3'>
                                            {loadingBtn ? <Loading /> : <button type='submit' onSubmit={handleSubmit} className='btn'>Salvar</button> }
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </form>
                    }

                </div>

            </div>

        </div>
    )
}