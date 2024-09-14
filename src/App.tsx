// App.tsx
import React, { useState } from 'react';
import { Task } from './ZaniaTaskManagementSystem/types';
import TaskList from './ZaniaTaskManagementSystem/TaskList';
import AddNewForm from './ZaniaTaskManagementSystem/AddNewForm';
import "./App.css"

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, category: 'Shopping', title: 'Shopping', status: 'pending', description: "Get essentials from Trader Joe's" },
    { id: 2, category: 'Shopping', title: 'Shoes', status: 'pending', description: 'Purchase running shoes' },
    { id: 3, category: 'Work', title: 'Presentation', status: 'pending', description: 'Create slides for team meeting' },
    { id: 4, category: 'Work', title: 'Review', status: 'pending', description: "Review frontend team's pull request" },
    { id: 5, category: 'Home', title: 'Garage', status: 'pending', description: 'Organize tools and discard unnecessary items' },
    { id: 6, category: 'Home', title: 'Plants', status: 'pending', description: 'Water indoor and outdoor plants' },
    { id: 7, category: 'Health', title: 'Exercise', status: 'pending', description: 'Complete 30-minute yoga session' },
    { id: 8, category: 'Health', title: 'Appointment', status: 'pending', description: 'Visit dentist for routine check-up' }
  ]);
  
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  const [isAdding, setIsAdding] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const addTask = (task: Task) => {
    setTasks([task,...tasks]);
    setFilteredTasks([task,...tasks ]);
  };

  const searchTasks = (category: string) => {
    const filtered = tasks.filter(task => task.category.toLowerCase().includes(category.toLowerCase()));
    setFilteredTasks(filtered);
  };

  const resetSearch = () => {
    setFilteredTasks([...tasks]);
    setSearchQuery("");
  };

  return (
    <div className='taskManager'>
      <p className='heading'>Zania Task Management System</p>
      <div className='subTask'>
        <button onClick={() => setIsAdding(true)}>Add Task</button>
        <input 
          type="text" 
          placeholder="Search by category" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button onClick={() => searchTasks(searchQuery)}>Search</button>
        <button onClick={resetSearch}>Cancel</button>
      </div>
      
      {isAdding && <AddNewForm addTask={addTask} setIsAdding={setIsAdding} />}
      
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
