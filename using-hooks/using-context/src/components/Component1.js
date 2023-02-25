import { useContext } from "react";
function Component1() {
    const ctx = useContext(useContext)
    return (<div>
            <h1>{ctx}</h1>
    </div>
    )
}
export default Component1;