import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import ProjectGridView from '../components/ProjectList';
import ProjectListView from '../components/ProjectListView';
import ProjectForm from '../components/ProjectForm';
import Modal from '../components/Modal';
import ViewSelector from '../components/ViewSelector';
import { projectService } from '../services/projectService';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await projectService.getProjects();
      // Asegurarse de que los proyectos tengan los campos necesarios
      const formattedProjects = data.map(project => ({
        ...project,
        updatedAt: project.updated_at ? new Date(project.updated_at).toLocaleDateString() : 'Sin actualizar',
        members: project.members || [],
        description: project.description || 'Sin descripción'
      }));
      setProjects(formattedProjects);
    } catch (err) {
      setError('Error al cargar los proyectos');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateProject = async (projectData) => {
    try {
      const newProject = await projectService.createProject(projectData);
      setProjects([newProject, ...projects]);
      setIsModalOpen(false);
    } catch (err) {
      setError('Error al crear el proyecto');
      console.error(err);
    }
  };

  const filteredProjects = projects.filter(project =>
    project.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) return (
    <div className="bg-[#1C1C1C] min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center space-y-4"
      >
        <div className="w-8 h-8 border-t-2 border-blue-500 rounded-full animate-spin" />
        <p className="text-gray-400 text-sm font-medium">Cargando proyectos...</p>
      </motion.div>
    </div>
  );
  
  if (error) return (
    <div className="bg-[#1C1C1C] min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-red-500/10 p-4 rounded-lg border border-red-500/20"
      >
        <p className="text-red-500 font-medium">{error}</p>
        <button
          onClick={loadProjects}
          className="mt-2 text-sm text-red-500 hover:text-red-400 transition-colors"
        >
          Reintentar
        </button>
      </motion.div>
    </div>
  );

  return (
    <div className="bg-[#1C1C1C] min-h-screen">
      <Navbar onNewProject={() => setIsModalOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-white">Proyectos</h1>
              <p className="text-gray-400 text-sm mt-1">
                {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar proyectos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 px-4 py-2 bg-[#2C2C2C] text-gray-200 rounded-lg
                    border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                    transition-colors placeholder-gray-500"
                />
              </div>
              
              <ViewSelector
                currentView={currentView}
                onViewChange={setCurrentView}
              />
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium
                  rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Nuevo Proyecto</span>
              </motion.button>
            </div>
          </div>

          {/* Projects Grid/List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-[#1C1C1C]"
            >
              {currentView === 'grid' ? (
                <ProjectGridView projects={filteredProjects} />
              ) : (
                <ProjectListView projects={filteredProjects} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProjectForm
          onSubmit={handleCreateProject}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default ProjectsPage;
