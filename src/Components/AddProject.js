import React, { Component } from 'react';
import uuid from "uuid";
import { observer } from "mobx-react";
import {Alert, Grid,Panel} from 'react-bootstrap';

const AddProject = observer(class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {},
      alertVisible: false
    }
  }

  static defaultProps = {
    categories: ["Web Design", "Web Development", "Mobile App"]
  }
  handleSubmit(e){
    if(this.refs.title.value === ""){
      this.setState({alertVisible: true})
    } else {
      this.setState({newProject:{
        id:uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }
  changeState(){
    this.setState({alertVisible : false})
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <Grid>
        <Panel>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <lable>Title</lable><br />
            <input className="form-control" type="text" ref="title" onChange={this.changeState.bind(this)}/>
          </div>
          <br />
          <div>
            <lable>Category</lable><br />
            <select className="form-control" ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input className="btn btn-default" type="submit" value="Submit" />
        </form>
        <br />
        <div>
        { this.state.alertVisible ? (
        <Alert bsStyle="danger">
        <h4>Oh snap! You got an error!</h4>
        <p>Title is required!
        </p>
      </Alert>
    ) : null
    }
    </div>
  </Panel>
  </Grid>
    );
  }
}
)

export default AddProject;
