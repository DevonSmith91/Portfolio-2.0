import React from 'react'
import NavBar from './NavBar'
import "../Styles/App.css"
import Home from "./Home"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Contact from "./Contact"
import {Switch, Route} from "react-router-dom"


export default function App() {
	return (
    <div>
      <NavBar />
      <div className="container">
        <div className="content">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/projects" render={() => <Projects />} />
            <Route path="/about" render={() => <AboutMe />} />
            <Route path="/contact" render={() => <Contact />} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
