import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TaskKanbanView from '../components/TaskList';
import TaskTableView from '../components/TaskTableView';
import ViewSelector from '../components/ViewSelector';
import { taskService } from '../services/taskService';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentView, setCurrentView] = useState('kanban');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await taskService.getTasks();
      setTasks(data);
    } catch (err) {
      setError('Error al cargar las tareas');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  if (isLoading) return (
    <div className="bg-[#1C1C1C] min-h-screen flex items-center justify-center">
      <div className="text-white">Cargando...</div>
    </div>
  );

  if (error) return (
    <div className="bg-[#1C1C1C] min-h-screen flex items-center justify-center">
      <div className="text-red-500">{error}</div>
    </div>
  );

  return (
    <div className="bg-[#1C1C1C] min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">Tareas</h1>
            <button className="text-sm px-3 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
              Nueva tarea
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar tareas..."
                className="w-64 px-4 py-2 rounded-lg bg-[#2C2C2C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <ViewSelector
              currentView={currentView}
              onViewChange={handleViewChange}
            />
          </div>
        </div>

        {currentView === 'kanban' ? (
          <div className="flex space-x-6 overflow-x-auto pb-4">
            <TaskKanbanView
              title="Backlog"
              tasks={getTasksByStatus('backlog')}
              status="backlog"
            />
            <TaskKanbanView
              title="En progreso"
              tasks={getTasksByStatus('in_progress')}
              status="in_progress"
            />
            <TaskKanbanView
              title="Completado"
              tasks={getTasksByStatus('done')}
              status="done"
            />
          </div>
        ) : (
          <TaskTableView tasks={tasks} />
        )}
      </div>
    </div>
  );
};

export default TasksPage;
