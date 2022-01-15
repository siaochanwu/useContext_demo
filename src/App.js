import React, { useState } from "react";
import ClassContext from './ClassContext'
import FunctionContext from './FunctionContext'

export const ThemeContext = React.createContext()


function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>toggle theme</button>
        <ClassContext />
        {/* <FunctionContext /> */}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
