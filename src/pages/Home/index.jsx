import { MdToday, MdViewWeek, MdCalendarViewMonth, MdCalendarToday } from "react-icons/md"

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

            </div>

            <div className="contentData">
                
            </div>

        </div>
    )
}