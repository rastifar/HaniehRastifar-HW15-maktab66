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
    const list = [...this.state.list];
    list.push(task);
    this.setState({
      list,     
    });
  };
  removeHandlerInTodoForRemovingTodos = (task) => {
    console.log('todo delete ',task);
    this.setState({
      list: this.state.list.filter((todo) => todo.id !== task.id),
    });
    console.log("todo dl ",this.state.list);
  };
  editHandlerInTodoForEditingTodos = (item) => {
    console.log("edit in todo  :", item);
    this.setState((prevState) => ({
      list: prevState.list.map((obj) =>
        obj.id === item.id ? Object.assign(obj, { value: item.value }) : obj
      ),
    }));
    console.log("todo edit ",this.state.list);
    // this.state.list.map(items => {
    //   if (items.id === item.id) {        
    //     // this.setState((prevState) => ({
    //     //   list:{
    //     //     ...prevState.list,
    //     //     value:item.task
    //     //   }
    //     //     }))
    //     this.setState(prevState => ({
    //       list: {
    //         ...prevState.list,
    //         value:item.task
    //      }
    //    }))
    //     console.log('map:',items);
    //   }
    // })
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
            <TodoForm recieveTaskFromTodoForm={this.submitHandler} />
            <TodoList
              todos={this.state.list}
              handleTodosInRemove={this.removeHandlerInTodoForRemovingTodos}
              handleTodosInEdit={this.editHandlerInTodoForEditingTodos}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Todo;
