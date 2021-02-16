import React, {Component} from 'react'

class BalanceMonth extends Component {

    render() {
        return (
            <div className="p-3 bg-white rounded-md shadow-md">
                <div className="w-full flex flex-col">
                    <div className="p-1 w-full flex text-green-700">
                        <div className="p-1">
                            Incomes
                        </div>
                        <div className="p-1 w-full text-right">
                            R$ 1000,00
                        </div>
                    </div>

                    <div className="p-1 w-full flex text-red-600">
                        <div className="p-1 w-full" >
                            Expenses
                        </div>
                        <div className="p-1 w-full text-right">
                            R$ 100000,00
                        </div>
                    </div>

                    <div className="p-1 w-full flex">
                        <div className="p-1 w-full" >
                            Balance
                        </div>
                        <div className="p-1 w-full text-right">
                            R$ 100000,00
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default BalanceMonth
