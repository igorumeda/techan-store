import { MdToday, MdViewWeek, MdCalendarViewMonth, MdCalendarToday, MdArrowUpward, MdArrowDownward, MdSwapVert } from "react-icons/md"
import { FcMoneyTransfer } from 'react-icons/fc'

import Title from "../../components/Title"

import './styles.css'

export default function Home(){
    return(
        <div className="home">

            <Title titulo="Dashboard" urlVoltar="/" />

            <div className="contentData">
                
                <div className="destaques box">

                    <div className="top">
                        <div className="icon bg-orange-400">
                            <MdToday size={40} />
                        </div>
                        <h2><i>R$</i>250,00</h2>
                    </div>

                    <hr />

                    <span>Hoje</span>

                </div>

                <div className="destaques box">

                    <div className="top">
                        <div className="icon bg-fuchsia-500">
                            <MdViewWeek size={40} />
                        </div>
                        <h2><i>R$</i>1.789,00</h2>
                    </div>

                    <hr />

                    <span>Esta Semana</span>

                </div>

                <div className="destaques box">

                    <div className="top">
                        <div className="icon bg-green-500">
                            <MdCalendarViewMonth size={40} />
                        </div>
                        <h2><i>R$</i>12.578,00</h2>
                    </div>

                    <hr />

                    <span>Este Mês</span>

                </div>

                <div className="destaques box">

                    <div className="top">
                        <div className="icon bg-blue-500">
                            <MdCalendarToday size={40} />
                        </div>
                        <h2><i>R$</i>456.789,00</h2>
                    </div>

                    <hr />

                    <span>Este Ano</span>

                </div>

                <div className="destaques box">

                    <div className="top">
                        <div className="icon bg-green-600">
                            <MdSwapVert size={40} />
                        </div>
                        <h3>Últimos lançamentos</h3>
                    </div>

                    <hr />

                    <div className="bot">

                        <table className="table-list">
                            <thead>
                                <tr className="titleTable">
                                    <th className="md:w-1/12"></th>
                                    <th className="md:w-9/12">Movimento</th>
                                    <th className="md:w-2/12 valor">Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="md:w-1/12" data-label="#">
                                        <div className="inline-block"><FcMoneyTransfer size={20} /></div>
                                    </td>
                                    <td className="md:w-9/12" data-label="Movimento">Entrada</td>
                                    <td className="md:w-2/12 valor" data-label="Valor">
                                        <div className="inline-block"><MdArrowUpward size={15} color="green" /></div>
                                        <i className="text-green-600">100,00</i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>

            </div>

        </div>
    )
}