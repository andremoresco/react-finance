import React, { Component, useRef } from 'react'
import DropdownList from './DropdownList'

class Dropdown extends Component {

    state = {
        isOpen: false,
        monthSelected: 0,
        months: [
            {
                month: 0,
                description: "Janeiro"
            },
            {
                month: 1,
                description: "Fevereiro"
            },
            {
                month: 2,
                description: "Março"
            },
            {
                month: 3,
                description: "Abril"
            },
            {
                month: 4,
                description: "Maio"
            },
            {
                month: 5,
                description: "Junho"
            },
            {
                month: 6,
                description: "Julho"
            },
            {
                month: 7,
                description: "Agosto"
            },
            {
                month: 8,
                description: "Setembro"
            },
            {
                month: 9,
                description: "Outubro"
            },
            {
                month: 10,
                description: "Novembro"
            },
            {
                month: 11,
                description: "Dezembro"
            },

        ],
    }

    render() {

        const {itemSelected} = this.props;

        const { isOpen, months, monthSelected }  = this.state;

        const choose = (index) => {
            this.setState({monthSelected: index, isOpen: false, selected: index})
            itemSelected(months[index]);
        }

        const onButtonClick = () => {
            this.setState({isOpen: !isOpen})
        }

        // const dropdownListRef = useRef(null);
        return(
            // <!-- This example requires Tailwind CSS v2.0+ -->
            // <!--
            //   Custom select controls like this require a considerable amount of JS to implement from scratch. We're planning
            //   to build some low-level libraries to make this easier with popular frameworks like React, Vue, and even Alpine.js
            //   in the near future, but in the mean time we recommend these reference guides when building your implementation:
            
            //   https://www.w3.org/TR/wai-aria-practices/#Listbox
            //   https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
            // -->
            <div>
                <div className="mt-1 relative">
                    <button 
                        type="button" 
                        aria-haspopup="listbox" 
                        aria-expanded={(isOpen ? "true" : "open")} 
                        onClick={onButtonClick}
                        onKeyDown={onButtonClick}
                        className="relative w-full bg-white border border-gray-300 rounded-lg shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        
                        <span className="flex items-center">
                            <span className="ml-3 block truncate">
                                {months[monthSelected].description}
                            </span>
                        </span>

                        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </button>

                    <DropdownList 
                        id="dropdownlist"
                        items={months} 
                        isOpen={isOpen} 
                        choose={choose} />

                </div>
            </div>
        )
    }
}

export default Dropdown;