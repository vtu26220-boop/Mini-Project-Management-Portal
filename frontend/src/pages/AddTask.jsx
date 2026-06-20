import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addTask } from "../services/taskService";

import "./AddTask.css";

function AddTask() {

  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    priority: "Medium",
    dueDate: ""
  });

  const handleChange = (e) => {

    setTask({
      ...task,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (task.description.length < 20) {

      alert(
        "Description must be at least 20 characters"
      );

      return;
    }

    try {

      await addTask(task);

      alert(
        "Task Added Successfully"
      );

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(
        "Error adding task"
      );

    }

  };

  return (

    <div className="add-task-container">

      <div className="container">

        <div className="add-task-card">

          <h1 className="add-title">
            Add New Task
          </h1>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="title"
              placeholder="Task Title"
              className="form-control custom-field"
              value={task.title}
              onChange={handleChange}
              required
            />

            <textarea
              name="description"
              placeholder="Task Description"
              className="form-control custom-field"
              rows="5"
              value={task.description}
              onChange={handleChange}
              required
            />

            <select
              name="status"
              className="form-control custom-field"
              value={task.status}
              onChange={handleChange}
            >

              <option value="Pending">
                Pending
              </option>

              <option value="Completed">
                Completed
              </option>

            </select>

            <select
              name="priority"
              className="form-control custom-field"
              value={task.priority}
              onChange={handleChange}
            >

              <option value="High">
                High
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="Low">
                Low
              </option>

            </select>

            <input
              type="date"
              name="dueDate"
              className="form-control custom-field"
              value={task.dueDate}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="save-btn"
            >
              Save Task
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default AddTask;