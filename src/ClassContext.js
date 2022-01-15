import React, {Component} from "react";
import { ThemeContext } from "./App";

export default class ClassContext extends Component {
    themeStyle (dark) {
        return {
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#ccc' : '#333',
            padding: '30px',
            margin: '30px'
        }
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyle(darkTheme)}>CLASS THEME</div>
                }}
            </ThemeContext.Consumer>
        )
    }
}