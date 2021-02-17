import React, {Component} from 'react'
import { getBalanceByMonth } from '../service/BalanceService'
import  arrowUp  from '../assets/circle_green_arrow-up.svg'
import  arrowDown  from '../assets/red_arrow-down.svg'

class BalanceMonth extends Component {

    state = {
        balance: {
            incomes: 0,
            expenses: 0,
            balance: 0
        }
    }

    componentDidMount() {
        
        getBalanceByMonth()
        .then(response => {
            this.setState({
                balance: response
            })
        })
    }

    render() {

        const { balance } = this.state;

        return (
            <div>
                <div className="p-2 font-sans font-medium text-base text-gray-400">
                    Balanço mensal
                </div>

                <div className="p-3 bg-white rounded-md shadow-md text-sm">
                    <div className="w-full flex flex-col">
                        <div className="p-1 w-full flex ">
                            <div className="p-1">
                                <img className="h-6 w-14 object-cover" src={arrowUp}/>
                            </div>

                            <div className="p-1 w-full">
                                Receitas
                            </div>
                            <div className="p-1 w-full text-right text-green-700">
                                R$ {balance.incomes}
                            </div>
                        </div>

                        <div className="p-1 w-full flex">
                            <div className="p-1">
                                <img className="h-6 w-14 object-cover" src={arrowDown}/>
                            </div>

                            <div className="p-1 w-full" >
                                Despesas
                            </div>
                            <div className="p-1 w-full text-right text-red-600">
                                R$ {balance.expenses}
                            </div>
                        </div>

                        <hr/>

                        <div className="p-1 w-full flex ">
                            <div className="p-1 w-full" >
                                
                            </div>
                            <div className="p-1 w-full text-right">
                                R$ {balance.balance}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }


}

export default BalanceMonth
