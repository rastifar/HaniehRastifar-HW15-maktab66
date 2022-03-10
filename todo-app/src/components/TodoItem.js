import React, { Component } from "react";
import { InputGroup, FormControl, Button, Modal } from "react-bootstrap";
import { BsPencilSquare, BsFillFileExcelFill,BsCheck2Square } from "react-icons/bs";
import styles from "./TodoItem.module.css";

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,     
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
    this.setState({
      show: true,
      taskTitle: this.props.title,
    });
  };  
  setShow = () => {
    this.setState({
      show: false,
    });
  };
  modalChangeHandler = (e) => {    
    this.setState({
      taskTitle: e.target.value,
    });
  };
  saveChange = () => {
    
    console.log("edit in todo item :", {
      id: this.props.id,
      value: this.state.taskTitle,
    });
    this.setState({
      show: false,
    });
   
    this.props.edit({id:this.props.id, value: this.state.taskTitle });
  };
  render() {
    const { isChecked } = this.state;
    return (
      <>
        <InputGroup className="mb-3 ">
          <InputGroup.Checkbox onChange={this.handleChange} />
          <FormControl
            type="text"
            id={this.props.id}
            disabled={ true}
            value={this.props.title}
            className={isChecked ? styles.lineThrough : null}
          />
          <Button
            variant="outline-success"
            id="button-addon2"
            onClick={this.editTask}
          >           
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
         
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-success">
              Edit Your Task
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input className="w-100 p-3"
              type="text"
              value={this.state.taskTitle}
              onChange={this.modalChangeHandler}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.saveChange}><BsCheck2Square/></Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default TodoItem;
