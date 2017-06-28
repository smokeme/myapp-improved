import React, { Component } from 'react';
import { observer } from "mobx-react";
import {ListGroupItem} from 'react-bootstrap';
const ProjectItem = observer(class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    return (
       <ListGroupItem className="list-group-item ">
        {this.props.project.title}: {this.props.project.category} <a href={"#" + this.props.project.id} onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
      </ListGroupItem>
    );
  }
}
)
export default ProjectItem;
