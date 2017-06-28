import React, { Component } from 'react';
import uuid from "uuid";
import $ from "jquery";
import Api from "./Components/Api";
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import Home from "./Components/Home"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { observer } from "mobx-react";

const App = observer(class App extends Component {
  componentWillReact() {
    console.log("I will re-render, since the todo has changed!");
}
  constructor(){
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }
  getTodos(){
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      dataType: "json",
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }
  getProjects(){
    this.setState({projects: [
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id:uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }
  componentWillMount(){
    this.getProjects();
  }
  componentDidMount(){
    this.getTodos();
  }

  render() {
    let navInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">My Project</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav bsStyle="pills">
      <LinkContainer exact to="/">
        <NavItem>
          Home
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/api">
        <NavItem>
          Todos
        </NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
);
    return (
        <Router>
          <div className="App">
            {navInstance}
            <Route exact path="/" render={()=><Home store={this.props.store} />} />
            <Route path="/api" render={()=><Api store={this.props.store} />} />
          </div>
        </Router>
      )
  }
}
)

export default App;
