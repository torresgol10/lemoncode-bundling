import React from 'react';
import logo from './public/logo.png';
import "./styles.scss";

export default function App() {
    return (
        <div className="center">
            <img src={logo} width="150" />
            <h1>Hello from React DOM</h1>
        </div>
    )
}