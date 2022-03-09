import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    // this.list = [this.props.todos.map(item => item);
    this.state = {
      // list: [
      //   { id: 1, title: "1" },
      //   { id: 2, title: "2" },
      //   { id: 3, title: "3" },
      //   { id: 4, title: "4" },
      // ],
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
    // this.props.todos.splice(item, 1);
    console.log(item.id);
    console.log(this.props.todos);
    console.log("list", this.state.list);
    // const list = [...this.state.list];
    // const list = this.props.todos;
    // console.log(this.state.list);
    // filter out the item being deleted
    this.props.handleTodosInRemove(item);
    const updatedList = this.state.list.filter((todo) => todo.id !== item.id);

    // const updatedList = list.filter(item => item.id !== id);
    // this.props.todos = updatedList
    this.setState({ list: updatedList });
  };
  editHandler = (item) => {
    console.log(item);
     this.props.handleTodosInEdit(item)
    // const updatedList = this.state.list.filter(todo => todo.id !== item.id)

    // // const updatedList = list.filter(item => item.id !== id);
    // // this.props.todos = updatedList
    // this.setState({ list: updatedList });
  }
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
                remove={() => this.deleteHandler(item)}
                edit={()=>{this.editHandler(item)}}
              />
            ))}
          </Col>
        </Row>
      </Container>
      //   </div>
    );
  }
}

export default TodoList;
