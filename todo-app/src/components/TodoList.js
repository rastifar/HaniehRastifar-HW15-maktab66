import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  deleteHandler = (item) => {
    console.log("delete in todo list ", item);
    this.props.handleTodosInRemove(item);
  };
  editHandler = (item) => {
    console.log("edit in todo List :", item);
    this.props.handleTodosInEdit(item);
  };
  render() {
    const { todos } = this.props;
    return (
      <Container>
        <Row>
          <Col className="mx-auto" lg={10}>
            {todos.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                title={item.value}
                remove={() => this.deleteHandler(item)}
                edit={this.editHandler}
              />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TodoList;
