import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
      <form onSubmit={props.submit}>

        <label>
          Task title:
          <input type="text" name="title" required onChange={(event) => props.change(event)}
          />
        </label>
        <br />
        <label>
          Due date:
          <input type="date" name="deadline" required onChange={(event) => props.change(event)}
          />
        </label>
        <br />
        <label>
          Details:
          <input type="text" name="description" onChange={(event) => props.change(event)}
          />
        </label>
        <br />
        <label>
          Priority:
          <select type="text" name="priority" onChange={(event) => props.change(event)}
          >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option> 
          </select>
        </label>

        <input type="submit" value="Submit" onChange={(event) => props.change(event)}
        />
      </form>
    </div>
  )
};

export default AddTaskForm;
