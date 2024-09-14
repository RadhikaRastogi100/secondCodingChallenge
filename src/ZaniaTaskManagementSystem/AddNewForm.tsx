// TaskForm.tsx
import React, { useState } from "react";
import { Task } from "./types";
import "./AddNewForm.css";

interface TaskFormProps {
  addTask: (task: Task) => void;
  setIsAdding: (isAdding: boolean) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask, setIsAdding }) => {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    category: "",
  });

  const handleSubmit = () => {
    if (taskDetails.title && taskDetails.description && taskDetails.category) {
      const newTask: Task = {
        id: Math.floor(Math.random() * 1000), // For simplicity, using random ID
        ...taskDetails,
        status: "pending",
      };
      addTask(newTask);
      setIsAdding(false); // Close form after adding
    }
  };

  return (
    <div className="addForm">
      <p className="addTaskHeading">Add New Task</p>
      <div>
        <label>Title</label>
        <input
          type="text"
          placeholder="Title"
          value={taskDetails.title}
          onChange={(e) =>
            setTaskDetails({ ...taskDetails, title: e.target.value })
          }
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          value={taskDetails.description}
          onChange={(e) =>
            setTaskDetails({ ...taskDetails, description: e.target.value })
          }
        />
      </div>
      <div>
        <label>Category</label>
        <input
          type="text"
          placeholder="Category"
          value={taskDetails.category}
          onChange={(e) =>
            setTaskDetails({ ...taskDetails, category: e.target.value })
          }
        />
      </div>
      <div style={{marginTop:'10px'}}>
        <button onClick={handleSubmit}>Add</button>
        <button onClick={() => setIsAdding(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default TaskForm;
