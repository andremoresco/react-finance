
import React, {Component} from 'react'

class DefaultBlock extends Component {

    render() {

        const { children, title } = this.props;

        return(
            <div className="h-full">
                <div className="p-3 h-full bg-white rounded-xl shadow-md text-sm">
                    <div className="p-1 mb-4 font-sans font-normal text-base text-blue-900">
                        {title}
                    </div>

                    <div className="w-full flex flex-col">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default DefaultBlock