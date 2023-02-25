import { createContext, useState } from "react";
import Component1 from "./Component1";

const UserContext = createContext();


function Component0() {
    const [count, setCount] = useState(0);
    const valueToShare ={
        count,
        increment: () =>setCount(count + 1)
    }
    return (
        <UserContext.Provider value={{valueToShare}}>
            <Component1 />
        </UserContext.Provider>
    )
}
export default Component0;