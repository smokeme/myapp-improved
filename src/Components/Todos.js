import React, { Component } from 'react';
import TodoItem from './TodoItem';
import uuid from "uuid";
import {Grid,ListGroup} from 'react-bootstrap';
class Todos extends Component {
  render() {
    let todoItem;
    if (this.props.todos){
      todoItem = this.props.todos.map(todo => {
        return (
          <TodoItem key={uuid.v4()} todo={todo} />
        )
      })
    }
    return (
      <div>
      <h3 className="center-block">Todo List</h3>
      <ListGroup >
        {todoItem}
      </ListGroup >
    </div>
    );
  }
}

export default Todos;
