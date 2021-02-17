import React, {Component} from 'react'
import FinancialStatus from "./components/FinancialStatus";

class App extends Component {

    render() {
        return (
            <div className="h-screen bg-gray-100">
                <h1 className="p-4 text-2xl font-sans text-gray-500">Dashboard</h1>
                <FinancialStatus/>
            </div>
            
        )
    }

}

export default App