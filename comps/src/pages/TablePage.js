import Table from "../components/Table";
import SortableTable from "../components/SortableTable";
function TablePage() {
    const data = [
        { name: "Orange", color: "bg-orange-500", score: 3 },
        { name: "Apple", color: "bg-red-500", score: 4 },
        { name: "Banana", color: "bg-yellow-500", score: 2 },
        { name: "Lime", color: "bg-green-500", score: 1 },
        { name: "Mandarine", color: "bg-red-800", score: 3.5},
    ];
    const config = [
        {   
            label: "Name",
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        { 
            label: "Color",
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
            
        },
        { 
            label: "Score",
            render: (fruit) => fruit.score,
            // header: () => <th className="bg-red-500">score</th>,
            sortValue: (fruit) => fruit.score
        },
        {   
            label: "Score*2",
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        
    ];

    const keyFn = (fruit) =>{
        return fruit.name;
    }

    return (
        <div>
            <Table data={data} config={config} keyFn={keyFn}/>
            <SortableTable data={data} config={config} keyFn={keyFn}/>
        </div>
    );
}

export default TablePage;