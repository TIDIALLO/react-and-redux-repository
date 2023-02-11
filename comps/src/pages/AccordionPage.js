import Accordion from "../components/Accordion";
function AccordionPage() {
    const items = [
        {
            id: "i1",
            label: "Can i use React on a project?",   
            content: "You can use React on any project you want. You can use React on any project you want You can use React on any project you want You can use React on any project you want  "
        },{
            id: "i2",
            label: "Can i use Javascript on a project?",   
            content: "You can use React on any project you want. You can use React on any project you want You can use React on any project you want You can use React on any project you want  "
        },{
            id: "i3",
            label: "Can i use CSS on a project?",   
            content: "You can use React on any project you want. You can use React on any project you want You can use React on any project you want You can use React on any project you want  "
        }
    ];
    return (
    <div>
        <Accordion items={items}/>
    </div>
    )

}

export default AccordionPage;
