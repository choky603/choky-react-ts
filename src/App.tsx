import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import './App.css';

const App = (props: any) => {
  useEffect(() => {

  }, []);

  return (
    <BrowserRouter basename={props.basename}>
      <Layout {...props} />
    </BrowserRouter>
  )

}

export default App;
