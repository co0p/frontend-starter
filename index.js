import React from "react";
import ReactDOM from "react-dom";

import './styles/styles.scss';

import {App} from './App.js';

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);