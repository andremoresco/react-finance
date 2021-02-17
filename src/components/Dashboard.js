import React, {Component} from 'react'
import FinancialStatusBalanceMonth from "./FinancialStatusBalanceMonth";
import DefaultBlock from './DefaultBlock'


class Dashboard extends Component {

    render() {
        return (
            <div>
                <h1 className="p-3 text-xl font-sans text-gray-500">Dashboard</h1>
                
                <div className="p-1 m-1 grid gap-x-3 gap-y-3 grid-cols-1 sm:grid-cols-2" >
                    <div className="col-span-2">
                        <FinancialStatusBalanceMonth />
                    </div>

                    <DefaultBlock title="Economizado no mês">
                        <div className="w-full flex flex-col">
                            <div className="p-1 w-full flex ">
                                <div className="p-1 w-full text-center text-md font-semibold text-blue-700">
                                    R$ 1500,00
                                </div>
                            </div>
                        </div>
                    </DefaultBlock>

                    {/* <div className="col-span-2">
                        <DefaultBlock title="Transações">

                        </DefaultBlock>
                    </div> */}

                </div>

            </div>
        )
    }
}

export default Dashboard