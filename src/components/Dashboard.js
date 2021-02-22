import React, {Component} from 'react'
import FinancialStatusBalanceMonth from "./FinancialStatusBalanceMonth";
import FinancialStatusMonthFund from "./FinancialStatusMonthFund";
import Dropdown from "./Dropdown";
import { getBalanceByMonth } from '../service/BalanceService'

class Dashboard extends Component {

    state = {
        monthSelected: {
            month: 0,
            description: "Janeiro"
        },
        financialStatus: {
            balance: {
                incomes: 0,
                expenses: 0,
                balance: 0
            },
            funds: {
                currentMonth: 1500,
                accumulated: 5000
            }
        }
    }

    componentDidMount() {
        getBalanceByMonth()
        .then(response => {
            this.setState({
                financialStatus: {
                    balance: response,
                    funds: {
                        currentMonth: 6000,
                        accumulated: 10000,
                        balance: 16000
                    }
                }

            })
        })
    }

    render() {

        const { monthSelected, financialStatus } = this.state;

        const itemSelected = (item) => {
            this.setState({monthSelected: item})
        }

        return (
            <div>
                <div className="p-1 m-1 grid gap-x-3 gap-y-3 grid-cols-1 sm:grid-cols-3">
                    <h1 className="p-3 text-xl font-sans text-blue-900 font-semibold sm:col-span-2">
                        Dashboard
                    </h1>

                    <div>
                        <Dropdown itemSelected={itemSelected} />
                    </div>

                </div>
                    
                <div className="p-1 m-1 grid gap-x-3 gap-y-3 grid-cols-1 sm:grid-cols-2" >
                    <div className="sm:col-span-1">
                        <FinancialStatusBalanceMonth balance={financialStatus.balance} />
                    </div>

                    <div className="sm:col-span-1">
                        <FinancialStatusMonthFund funds={financialStatus.funds} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard