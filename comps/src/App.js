import { useState } from "react";
import Dropdown from "./components/Dropdown";
function App() {
    const [selection, setSelection] = useState(null);

    const handleSelection = (option) =>{
        setSelection(option);
    }
    const options =[
        {label: 'red', value: 'red'},
        {label: 'green', value: 'green'},
        {label: 'blue', value: 'blue'},
    ]
    return (
    <div>
        <Dropdown  
            options={options}
            selection={selection}
            onSelect={handleSelection}    
        />
    </div>
    )

}

export default App;