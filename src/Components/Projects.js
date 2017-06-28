import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import { observer } from "mobx-react";
import {Panel,Grid,Col,ListGroup} from 'react-bootstrap';

const Projects = observer(class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    let projectItem;
    if (this.props.projects){
      projectItem = this.props.projects.map(project => {
        return (
          <Col key={project.id}>
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
          </Col>
        )
      })
    }
    return (
      <Grid>
      <Panel>
        <h4>My latest projects</h4>
        <ListGroup >
        {projectItem}
      </ListGroup>
      </Panel>
      </Grid>
    );
  }
}
)
export default Projects;
