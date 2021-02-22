import { react, Component } from "react"


export default function DropdownListItem(props) {

    const { month, index, handleMouseEnter, handleMouseLeave, choose, selected } = props;
    
    return (
        <li id={"listbox-item-"+index} role="option" aria-selected={selected === index} 
            className={(selected === index ? "text-white bg-indigo-600 " : "text-gray-900 ") + "hover:text-white hover:bg-indigo-600 cursor-default select-none relative py-2 pl-3 pr-9"} 
            onMouseEnter={() => handleMouseEnter(index)} 
            onMouseLeave={handleMouseLeave} 
            onClick={() => choose(index)}>

            <div className="flex items-center">
                <span className="ml-3 block font-normal truncate">
                    {month.description}
                </span>
            </div>
        </li>
    )

}