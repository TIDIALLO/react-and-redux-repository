import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
function App() {
    return (
        <div className="container mx-auto grid grid-col-6 gap-4 mt-4" >
            
            <Sidebar></Sidebar>
            <div className="col-span-5">
                <Route path="/accordion"> <AccordionPage></AccordionPage> </Route>
            </div>
            <div>
                <Route path="/"> <DropdownPage></DropdownPage> </Route>
            </div>
            <div>
                <Route path="/buttons"> <ButtonPage></ButtonPage> </Route>
            </div>
        </div>


    );
}

export default App;
