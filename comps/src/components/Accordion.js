import { useState } from "react";

function Accordion({items}){

    const [expendedIndex, setExpendedIndex] = useState(1);

    const handleClick = (nextIndex) =>{
        setExpendedIndex(nextIndex)
    }

    const renderedItems = items.map((item, index) =>{
        const isExpended = index === expendedIndex;
        
        return (
            <div key={item.id}>
                <div onClick={() => handleClick(index)} >{item.label}</div>
                <div>{isExpended && <div>{item.content}</div>}</div>
            </div>   
        )
    });

    return <div>{renderedItems} </div>;
}

export default Accordion;