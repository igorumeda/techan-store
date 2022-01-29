import { MdArrowBack } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useState } from 'react/cjs/react.development'

import Title from '../../components/Title'
import './styles.css'

export default function ClienteForm(){

    const [cpfCnpj, setCpfCnpj] = useState('');

    function handleSubmit(e){
        e.preventeDefault();
        toast.success('Salvo com sucesso');
    }

    return(
        <div>
            
            <div className='contentData'>
                <button className='btn-back'>
                    <MdArrowBack size={20} /> Voltar
                </button>
            </div>

            <Title titulo="Formulário do cliente" />

            <div className='contentData'>

                <div className='box'>
                    
                    <form className='formFlex'>

                        <label>CPF / CNPJ</label>
                        <input type='text' value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />

                        <label>Nome</label>
                        <input type='text' value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />

                        <label>Apelido / Nome Fantasia</label>
                        <input type='text' value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />

                        <label>Email</label>
                        <input type='text' value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />

                        <label>Telefone</label>
                        <input type='text' value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />

                        <label>Celular</label>
                        <input type='text' value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />

                        <label>Whatsapp</label>
                        <input type='text' value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />

                        <label>CEP</label>
                        <input type='text' value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />

                        <label>Endereço</label>
                        <input type='text' value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />

                        <label>Bairro</label>
                        <input type='text' value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />

                        <label>Cidade</label>
                        <input type='text' value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />

                        <label>UF</label>
                        <input type='text' value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />

                        <label>Complemento</label>
                        <input type='text' value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />

                        <button type='submit' onSubmit={handleSubmit} className='btn mt-4'>Salvar</button>

                    </form>

                </div>

            </div>

        </div>
    )
}