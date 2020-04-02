import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./components/Backend/Dashboard/Dashboard";
import Home from "./components/Frontend/Home/Home";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Services from "./pages/Services/Services";
import Contactus from "./pages/Contactus/Conatctus";
import Singlepage from "./pages/Singlepage/Singlepage";
import Users from "./components/Backend/Users/Users";

const routes = (props) => {
  return (
    <Switch>
      <Route path="/admin" exact component={Dashboard} />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/blog" exact component={Blogs} />
      <Route path="/services" exact component={Services} />
      <Route path="/contact" exact component={Contactus} />
      <Route path="/singlepage" exact component={Singlepage} />
      <Route path="/admin/users" {...props} exact component={Users} />
    </Switch>
  );
};

export default routes;
