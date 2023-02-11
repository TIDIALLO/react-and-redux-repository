import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange}) {

    const [isOpen, setIsOpen] = useState(false);
    const divEl  = useRef();

    useEffect(() =>{
        const handler = (event) =>{
            if(!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handler, true);
        return () =>{
            document.removeEventListener('click', handler);
        }
    },[]);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        //CLOSE DROPOWN
        setIsOpen(false);
        //WHAT OPTION DID THE USER CLICK ON??    
        onChange(option);
    };

    const renderOptions = options.map((option) => {
        return (
                <div className="bg-sky-500 hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() =>{handleOptionClick(option)}} key={option.value}>
                    {option.label}
                    
                </div>
            );        
    });

    // let content = 'content ......';
    // if(selection){
    //     content = selection.label;
    // }

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className=" flex justify-between  items-center cursor-pointer " 
                onClick={handleClick}>
                {value?.label || 'Select ................'}  
                <GoChevronDown  className="text-lg"/>
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full " >
                    {renderOptions}
                </Panel>
                )
            }
        </div>
    );
}

export default Dropdown;