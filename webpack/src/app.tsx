import React from 'react';
import logo from './public/logo.png';
import css from "./styles.scss";

export default function App() {
    return (
        <div className={css.center}>
            <img src={logo} width="150" />
            <h1>Hello from React DOM</h1>
        </div>
    )
}