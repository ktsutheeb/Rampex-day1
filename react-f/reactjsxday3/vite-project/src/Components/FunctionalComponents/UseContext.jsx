import React from "react";
import Component1 from "./ContextComponents/Component1";
import NewPage from "./NewPage";

export var ThemeProvider = React.createContext();
const UseContext = (props) => {
  return (
    <section>
      <ThemeProvider.Provider value={{ cgpa : "10.00" }}>
        <h1>hi parent c</h1>
        <Component1></Component1>
        <NewPage></NewPage>
      </ThemeProvider.Provider>
    </section>
  );
};

export default UseContext;
