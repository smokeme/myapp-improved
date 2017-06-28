import React, {Component} from 'react';
import $ from "jquery";
import {Panel, Grid} from 'react-bootstrap';
import Todos from "./Todos.js";
import {observer} from "mobx-react";
var Loader = require('halogen/PulseLoader');
const Api = observer(class Api extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["Loading"],

    }
  }
  getTodos() {
    if (2 > this.props.store.todos.length) {
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        dataType: "json",
        cache: false,
        success: (function(data) { this.props.store.todos = data}).bind(this),
        error: function(xhr, status, err) {
          console.log(err);
        }
      })
    }
  }
  setptate(){
    this.props.store.position = 1
  }
  componentDidMount() {
    this.getTodos();
    setTimeout(function() { this.setptate({position: 1}); }.bind(this), 1000);
  }

  render() {
    const Spinner = () => <div>Custom spinner...</div>

    return (< Grid > < Panel >
          { this.props.store.position == 0 ? (
          <Loader color="#26A65B" size="16px" margin="4px"/>
          ) : (
          < Todos todos = {
          this.props.store.todos
        } />
    )
        }
      < /Panel> <
      /Grid >);
  }
})
export default Api;
