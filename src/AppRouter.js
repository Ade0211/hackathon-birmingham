import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../src/Home';

const AppRouter = () => (
    <BrowserRouter>
      <div className="container">
        {/* <Header /> */}
        <div className="main-content">
          <Switch>
         
            <Route component={Home} path="/" exact ={true} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;