import React, { Component } from 'react';
import Projects from './Projects';
import AddProject from './AddProject';
import store from "../Store";
import { observer } from "mobx-react";
import { Grid } from 'react-bootstrap';

const Home = observer(class Home extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }
  handleAddProject(project){

    let projects = this.props.store.projects
    console.log(project);


     store.projects = projects.concat(project)
  }
  handleDeleteProject(id){

    let projects = this.props.store.projects
    console.log(id);
    let index = projects.findIndex(project => project.id === id);
    projects.splice(index, 1);
    store.projects = projects
  }
  componentWillReact(){
    this.setState({projects: this.props.store.projects})
  }
  render() {

    return (
      <Grid>
      <AddProject store={this.props.store} addProject={this.handleAddProject.bind(this)} />
      <Projects store={this.props.store} projects={this.props.store.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </Grid>
    );
  }
}
)
export default Home;
