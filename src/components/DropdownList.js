import React, { useState} from 'react'
import DropdownListItem from './DropdownListItem'

export default function DropdownList(props) {

        const { items, isOpen, choose } = props;

        const [ selected, setSelected ] = useState(null)

        const handlerMouseEnter = (index) => {
            setSelected(index)
        }

        const selectItem = (index) => {
            setSelected(index)
            choose(index)
        }

        return(
            <div className={(!isOpen ? "hidden" : "absolute") + " mt-1 w-full rounded-md bg-white shadow-lg"}>
                <ul tabIndex="-1" 
                    role="listbox" 
                    aria-activedescendant={"listbox-item-" + selected}
                    className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
    
                        {items.map((month, index) => {
                            return <DropdownListItem key={index} 
                                selected={selected}
                                month={month} 
                                index={index} 
                                choose={selectItem} 
                                handleMouseEnter={handlerMouseEnter} />
                        })}
                    
                </ul>
            </div>
        )

}