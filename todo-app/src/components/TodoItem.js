import React, { Component } from "react";
import { InputGroup, FormControl, Button, Modal } from "react-bootstrap";
import { BsPencilSquare, BsFillFileExcelFill } from "react-icons/bs";
import styles from "./TodoItem.module.css";

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
      isEditable: true,
      show: false,
      taskTitle: "",
    };
  }
  handleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };
  editTask = (e) => {
    // if (this.state.isEditable) {
    //   const item = { id: this.props.id, task: this.props.title }

    // }
    // this.setState({
    //   isEditable:!(this.state.isEditable)
    // })
    this.setState({
      show: true,
      taskTitle: this.props.title,
    });
  };
  getEditedInput = (e) => {
    console.log(this.props.id);
  };
  setShow = () => {
    this.setState({
      show: false,
    });
  };
  modalChangeHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      taskTitle: e.target.value,
    });
  };
  saveChange = () => {
    console.log("last title:", this.state.taskTitle);
    console.log("changelog:", {
      id: this.props.id,
      task: this.state.taskTitle,
    });
    this.setState({
      show: false,
    });
   
    this.props.edit({id:this.props.id, task: this.state.taskTitle });
  };
  render() {
    const { isChecked, isEditable } = this.state;
    return (
      <>
        <InputGroup className="mb-3 ">
          <InputGroup.Checkbox onChange={this.handleChange} />
          <FormControl
            type="text"
            id={this.props.id}
            disabled={isEditable ? true : false}
            value={this.props.title}
            className={isChecked ? styles.lineThrough : null}
          />
          <Button
            variant="outline-success"
            id="button-addon2"
            onClick={this.editTask}
          >
            {/* {isEditable?<BsPencilSquare />:<BsCheck2Square/>} */}
            <BsPencilSquare />
          </Button>
          <Button
            variant="outline-danger"
            id="button-addon2"
            onClick={this.props.remove}
          >
            <BsFillFileExcelFill />
          </Button>
        </InputGroup>

        <Modal
          show={this.state.show}
          onHide={() => this.setShow()}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Edit Your Task
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              value={this.state.taskTitle}
              onChange={this.modalChangeHandler}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.saveChange}>save</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default TodoItem;
