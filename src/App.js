import React from "react";
import { Container } from "@chakra-ui/react";
import { Switch, Route } from "react-router";

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ExperiancePage from "./pages/experiance/experiance.component";
import ProjectsPage from "./pages/projects/projects.component";
// import Footer from "./components/footer/footer.component";

function App() {
  return (
    <Container maxW="container.xl" pt={4}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/experiance" component={ExperiancePage} />
        <Route path="/projects" component={ProjectsPage} />
      </Switch>
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
