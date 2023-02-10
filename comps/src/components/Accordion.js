import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
function Accordion({ items }) {

    const [expendedIndex, setExpendedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        if (expendedIndex === nextIndex) {
            setExpendedIndex(-1);
        } else {
            setExpendedIndex(nextIndex);
        }
    }

    const renderedItems = items.map((item, index) => {
        const isExpended = index === expendedIndex;
        const icon = (<span className="text-2xl">{isExpended ? <GoChevronLeft /> : <GoChevronRight />}</span>);
        return (
            <div key={item.id}>
                <div
                    className="flex justify-between p-3  bg-cyan-50 border-b items-center  cursor-pointer"
                    onClick={() => handleClick(index)}                 
                >
                    {item.label}
                    {icon}
                </div>
                    {isExpended && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderedItems} </div>;
}

export default Accordion;