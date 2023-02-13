import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
    return (
        <div>
            <Link to="/accordion">Go to Accordion</Link>
            <Link to="/dropdown">Go to Dropdown</Link>
        
            <div>
                <Route path="/accordion"> <AccordionPage></AccordionPage> </Route>
            </div>
            <div>
                <Route path="/dropdown"> <DropdownPage></DropdownPage> </Route>
            </div>
        </div>


    );
}

export default App;
