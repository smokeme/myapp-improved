import React, { Component } from 'react';
import {ListGroupItem} from "react-bootstrap"
class TodoItem extends Component {
  render() {
    return (
      <ListGroupItem className="list-group-item ">
        <strong>{this.props.todo.title}</strong>

      </ListGroupItem>
    );
  }
}

export default TodoItem;
