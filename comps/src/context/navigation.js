import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // cette methode permet de géré si l'utilisateur clique sue les flêches retour et suivant de la Navbar
    useEffect(()=>{
        const handler = () =>{
            setCurrentPath(window.location.pathname)
        };
        window.addEventListener('popstate', handler);

        return window.addEventListener('popstate', handler);
    }, []);

    const navigate = (to) =>{
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return (
        <NavigationContext.Provider value={{currentPath, navigate                   }}>
            {currentPath}
            {children}
        </NavigationContext.Provider>
    )
};
export { NavigationProvider }
export default NavigationContext;