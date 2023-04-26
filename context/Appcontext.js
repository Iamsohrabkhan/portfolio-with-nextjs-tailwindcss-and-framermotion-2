import { createContext, useContext,useState } from 'react'

const AppContext = createContext();

const AppProvider = ({ children }) => {    
  const [click, setClick] = useState(false);

    const value={
        click,setClick
    }
    
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
 const UseApp = () => {
  return useContext(AppContext);
};

export { UseApp, AppProvider };
