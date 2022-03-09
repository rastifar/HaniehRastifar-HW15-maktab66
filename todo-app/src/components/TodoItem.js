import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { BsPencilSquare, BsFillFileExcelFill } from "react-icons/bs";
import styles from "./TodoItem.module.css";


class TodoItem extends Component {
  constructor() {
    super()
    this.state = {
      isChecked: false,
      isEditable:true
    }
  }
  handleChange = () => {
    this.setState({
    isChecked:!(this.state.isChecked)
  })
  }
  editTask = (e) => {
    if (this.state.isEditable) {
      const item = { id: this.props.id, task: this.props.title }
    
    }
    this.setState({
      isEditable:!(this.state.isEditable)
    })
    
  }
  getEditedInput = (e) => {
    console.log(this.props.id);
  

  }
  render() {
   
    const{isChecked,isEditable}=this.state
    return (
      <>
        <InputGroup className="mb-3 ">
          <InputGroup.Checkbox onChange={this.handleChange}/>
          <FormControl type="text" id={this.props.id}  disabled={isEditable?true:false} value={this.props.title} className={isChecked ? styles.lineThrough : null}/>
          <Button
            variant="outline-success"
            id="button-addon2"
            onClick={this.props.edit}
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
      </>
    );
  }
}

export default TodoItem;
