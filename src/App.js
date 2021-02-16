import React, {Component} from 'react'
import FinancialStatus from "./components/FinancialStatus";

class App extends Component {

    render() {
        return (
            <div className="h-screen bg-indigo-50">
                <h1>Dashboard</h1>
                <FinancialStatus/>
            </div>
            
        )
    }

}

export default App