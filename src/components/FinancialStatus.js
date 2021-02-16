import React, {Component} from 'react'
import BalanceMonth from "./BalanceMonth";

class FinancialStatus extends Component {

    render() {
        return (
            <div className="p-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="m-1">
                        <BalanceMonth/>
                    </div>

                    <div className="m-1">
                        <BalanceMonth/>
                    </div>

                    <div className="m-1" >
                        <BalanceMonth/>
                    </div>

                    <div className="m-1" >
                        <BalanceMonth/>
                    </div>
            </div>
        )
    }
}

export default FinancialStatus