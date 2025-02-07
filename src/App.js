import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProjectsPage from './pages/ProjectsPage';
import ProjectOverviewPage from './pages/ProjectOverviewPage';
import TasksPage from './pages/TasksPage';
import Navbar from './components/Navbar';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex h-screen bg-[#1C1C1C] overflow-hidden">
          {/* Navbar fijo */}
          <div className="w-64 flex-shrink-0">
            <div className="h-full overflow-y-auto">
              <Navbar />
            </div>
          </div>
          
          {/* Contenido principal con scroll independiente */}
          <div className="flex-1 overflow-y-auto">
            <main className="p-8">
              <Routes>
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjectOverviewPage />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/" element={<Navigate to="/projects" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
