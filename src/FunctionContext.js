import React from "react";
import { useTheme, useThemeUpdate } from './ThemeContext'

export default function FunctionContext() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyle = {
            backgroundColor: darkTheme ? '#333' : '#ccc',
            color: darkTheme ? '#ccc' : '#333',
            padding: '30px',
            margin: '30px'
    }
    return (
        <>
            <div style={themeStyle}>FUNCTION THEME</div>
            <button onClick={toggleTheme}>toggle theme</button>
        </>
    )
}