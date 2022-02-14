import React from 'react';
import MainApp from 'app/index';
import Error from 'components/Error404/index';
import 'styles/app.scss';
import {
	useRoutes,
  } from "react-router-dom";

const App = () => {
	let routes = useRoutes([
	  { path: "/", element: <MainApp /> },
	  { path: "Error", element: <Error /> },
	  // ...
	]);
	return routes;
  };

export default App;
