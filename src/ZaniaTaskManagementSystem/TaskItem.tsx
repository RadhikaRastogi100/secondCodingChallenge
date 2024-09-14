// TaskItem.tsx
import React from 'react';
import { Task } from './types';

interface TaskItemProps {
  task: Task;
  onMarkDone: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onMarkDone, onDelete }) => {
  return (
    <div style={{ backgroundColor: task.status === "completed" ? "#D7FFE4" : "#fff", margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>{`${task.title} (${task.category})`}</h3>
      <p>{task.description}</p>
      <button onClick={() => onMarkDone(task.id)} disabled={task.status === "completed"}>
        Done
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
