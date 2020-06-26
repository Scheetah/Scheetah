import React from "react";
import { render } from "react-dom";
import App from "./App";

import styles from "./styles.scss";
import AppRouter from "./AppRouter";

render(<AppRouter />, document.getElementById("root"));
