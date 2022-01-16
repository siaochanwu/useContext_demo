import React from "react"
// import ClassContext from './ClassContext'
import FunctionContext from './FunctionContext'
import { ThemeProvider } from "./ThemeContext"


function App() {
  return (
      <ThemeProvider>
        {/* <ClassContext /> */}
        <FunctionContext />
      </ThemeProvider>
  );
}

export default App;
