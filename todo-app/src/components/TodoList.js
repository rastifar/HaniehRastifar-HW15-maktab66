import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.todos,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.todos !== this.props.todos) {
      this.setState({
        list: this.props.todos,
      });
    }
  }
  deleteHandler = (item) => {
    console.log("delete in todo list ",item);
    this.props.handleTodosInRemove(item);
    const updatedList = this.state.list.filter((todo) => todo.id !== item.id);
    this.setState({ list: updatedList });
    console.log("todolist dl ",this.state.list);
  };
  editHandler = (item) => {
    console.log("edit in todo List :", item);
    this.props.handleTodosInEdit(item);   
    this.setState((prevState) => ({
      list: prevState.list.map((obj) =>
        obj.id === item.id ? Object.assign(obj, { value: item.value }) : obj
      ),
    }));
    console.log("todolist edit ",this.state.list);
    // const updatedList = this.state.list.filter(todo => todo.id !== item.id)

    // // const updatedList = list.filter(item => item.id !== id);
    // // this.props.todos = updatedList
    // this.setState({ list: updatedList });
  };
  render() {
    const { list } = this.state;
    return (
      <Container>
        <Row>
          <Col className="mx-auto" lg={10}>
            {list.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                title={item.value}
                remove={()=>this.deleteHandler(item)}
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
