// TaskList.tsx
import React from 'react';
import { Task } from './types';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {

  const handleDelete = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleMarkDone = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: "completed" } : task
    ));
  };

  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onMarkDone={handleMarkDone}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
