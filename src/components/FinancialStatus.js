import React, {Component} from 'react'
import FinancialStatusBalanceMonth from "./FinancialStatusBalanceMonth";
import FinancialStatusIncomes from "./FinancialStatusIncomes"

class FinancialStatus extends Component {

    render() {
        return (
            <div className="p-1 m-1 grid gap-x-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <FinancialStatusBalanceMonth />
                
                {/* <FinancialStatusIncomes /> */}
            </div>
        )
    }
}

export default FinancialStatus