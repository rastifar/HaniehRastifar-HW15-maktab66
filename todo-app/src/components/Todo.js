import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  submitHandler = (task) => {
    // console.log("from todo : ", task);
    // this.setState({ list: { ...this.state.list, task } });
    const list = [...this.state.list];
    list.push(task);
    this.setState({
      list,
      // editTast:'this is edit task'
    });
  };
  removeHandlerInTodoForRemovingProps = (task) => {
    this.setState({
      list: this.state.list.filter((todo) => todo.id !== task.id),
    });
  };
  editHandlerInTodoForEditingProps = (item) => {
    console.log('from edit in todo: ', item);
    this.state.list.map(items => {
      if (items.id === item.id) {        
        // this.setState((prevState) => ({
        //   list:{
        //     ...prevState.list,
        //     value:item.task
        //   }
        //     }))
        this.setState(prevState => ({
          list: {
            ...prevState.list,
            value:item.task
         }
       }))
        console.log('map:',items);
      }
    })
    // console.log('find', this.state.list.find(item=>item.id===task.id));
    // this.setState({
    //   editTast:task
    // })

  }
  render() {
    return (
      <Container className=" shadow-lg p-3 mb-5 bg-white rounded mt-5">
        <Row>
          <Col>
            <TodoForm recieveTaskFromTodoForm={this.submitHandler} sendTaskFromTodoListToTodoForm={this.state.editTast}/>
            <TodoList
              todos={this.state.list}
              handleTodosInRemove={this.removeHandlerInTodoForRemovingProps}
              handleTodosInEdit={this.editHandlerInTodoForEditingProps}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Todo;
