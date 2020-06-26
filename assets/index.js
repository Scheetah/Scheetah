import React from "react";
import { render } from "react-dom";
import App from "../client/components/App.jsx";
// import styles from "./scss/styles.scss";

import { BrowserRouter } from 'react-router-dom';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root"));
