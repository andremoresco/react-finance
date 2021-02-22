import React, {Component} from 'react'

import  arrowUp  from '../assets/circle_green_arrow-up.svg'
import  arrowDown  from '../assets/red_arrow-down.svg'
import DefaultBlock from './DefaultBlock'

class BalanceMonth extends Component {

    render() {

        const { balance } = this.props;

        return (
            <DefaultBlock title="Balanço mensal">
                <div className="w-full flex flex-col">
                    <div className="p-1 w-full flex ">
                        <div className="p-1">
                            <img className="h-6 w-14 " src={arrowUp}/>
                        </div>

                        <div className="p-1 w-full">
                            Receitas
                        </div>
                        <div className="p-1 w-full text-right font-normal text-green-700">
                            R$ {balance.incomes}
                        </div>
                    </div>

                    <div className="p-1 w-full flex">
                        <div className="p-1">
                            <img className="h-6 w-14" src={arrowDown}/>
                        </div>

                        <div className="p-1 w-full" >
                            Despesas
                        </div>
                        <div className="p-1 w-full text-right font-normal  text-red-600">
                            R$ {balance.expenses}
                        </div>
                    </div>

                    <hr/>

                    <div className="p-1 w-full flex ">
                        <div className="p-1 w-full" >
                            
                        </div>
                        <div className="p-1 w-full text-right font-normal ">
                            R$ {balance.balance}
                        </div>
                    </div>
                </div>
            </DefaultBlock>
        );
    }

}

export default BalanceMonth
