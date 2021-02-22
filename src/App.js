import React, {Component} from 'react'
import Dashboard from "./components/Dashboard";

class App extends Component {

    render() {
        return (
            <div className="h-screen bg-gray-100 flex flex-row">
                <div className="m-2 hidden sm:flex-1 sm:flex sm:w-1/4">
                    
                </div>
                <div className="m-2 w-full sm:w-3/4 lg:w-2/4 rounded-2xl shadow-md bg-gray-200">
                    <Dashboard/>
                </div>

                <div className="m-2 hidden lg:flex-1 lg:flex lg:w-1/4">
                    

                </div>

                
            </div>
            
        )
    }

}

export default App