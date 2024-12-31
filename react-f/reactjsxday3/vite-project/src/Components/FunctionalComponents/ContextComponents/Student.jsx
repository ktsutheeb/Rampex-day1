import React, { useContext } from "react";
import { ThemeProvider } from "../UseContext";


const Student = (props) => {
  var result = useContext(ThemeProvider)
  return (
    <div>
      <p>student result {result.cgpa}</p>
    </div>
  );
};

export default Student;
