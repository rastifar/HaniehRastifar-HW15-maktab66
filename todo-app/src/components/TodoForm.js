import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { v4 } from "uuid";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      inputTask: "",
    };
  }
  // componentDidMount() {
  //   let ids = new Set();
  //   for (let index = 0; index < 1000; index++) {
  //     ids.add(Math.floor(Math.random() * 1000 + 1));
  //   }
  //   this.setState({
  //     id: [...ids],
  //   });
  // }

  makeTask = () => {
    const newTask = {
      id: v4(),
      value: this.state.inputTask,
    };
    this.props.recieveTaskFromTodoForm(newTask)
  };

  changeHandler = (event) => {
    this.setState({
      inputTask: event.target.value,
    });
  };

  clickHandler = () => {
    if (this.state.inputTask) {
      this.makeTask();
    }
    this.setState({ inputTask: "" });
  };

  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col className="mx-auto" lg={10}>
            <div>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Enter Your Task"
                  value={this.state.inputTask}
                  onChange={this.changeHandler}
                />
                <Button
                  variant="outline-primary"
                  id="button-addon2"
                  onClick={this.clickHandler}
                >
                  <BsPlusLg />
                </Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TodoForm;
