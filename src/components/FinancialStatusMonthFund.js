import React, {Component} from 'react'
import DefaultBlock from './DefaultBlock'

class FinancialStatusMonthFund extends Component {

    render() {

        const { funds } = this.props;

        return(
            <DefaultBlock title="Economizado">
                <div className="p-1 w-full flex ">
                    <div className="p-1 w-full flex">
                        Saldo
                    </div>

                    <div className="p-1 w-full text-right text-md font-normal text-blue-700">
                        R$ {funds.accumulated}
                    </div>
                </div>
                <div className="p-1 w-full flex ">
                    <div className="p-1 w-full flex">
                        Mês atual
                    </div>

                    <div className="p-1 w-full text-right text-md font-normal text-green-700">
                        R$ {funds.currentMonth}
                    </div>
                </div>

                <hr/>

                <div className="p-1 w-full flex ">
                    <div className="p-1 w-full text-right text-md font-normal text-green-700">
                        R$ {funds.balance}
                    </div>
                </div>
            </DefaultBlock>
        )

    }
}

export default FinancialStatusMonthFund