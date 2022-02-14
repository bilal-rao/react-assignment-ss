import React from "react";
import {
	useRoutes,
  } from "react-router-dom";

import Home from './routes/home/index.js';

const App = () => {
	let routes = useRoutes([
	  { path: "/", element: <Home /> }
	  // ...
	]);
	return routes;
  };

export default App;
