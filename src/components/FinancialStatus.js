import React, {Component} from 'react'
import BalanceMonth from "./BalanceMonth";

class FinancialStatus extends Component {

    render() {
        return (
            <div className="p-1 flex flex-col lg:flex-row">
                <div className="w-full md:flex md:flex-row" >
                    <div className="m-1 md:w-1/2">
                        <BalanceMonth/>
                    </div>

                    <div className="m-1 md:w-1/2">
                        <BalanceMonth/>
                    </div>
                </div>

                <div className="w-full md:flex md:flex-row">
                    <div className="m-1 md:w-1/2" >
                        <BalanceMonth/>
                    </div>

                    <div className="m-1 md:w-1/2" >
                        <BalanceMonth/>
                    </div>
                </div>


            </div>
        )
    }
}

export default FinancialStatus