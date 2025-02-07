import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineHome, HiOutlineViewGrid, HiOutlineInbox, HiOutlineDocumentText, HiOutlineChartBar, HiChevronRight } from 'react-icons/hi';
import { BsPencilSquare, BsThreeDots } from 'react-icons/bs';
import { VscIssues, VscCircleSlash, VscExtensions, VscTypeHierarchy, VscFiles } from 'react-icons/vsc';
import { projectService } from '../services/projectService';

const Navbar = ({ onNewProject }) => {
  const [projects, setProjects] = useState([]);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await projectService.getProjects();
      setProjects(data);
    } catch (err) {
      console.error('Error al cargar los proyectos en el navbar:', err);
    }
  };

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const ProjectSubmenu = ({ project }) => (
    <div className="ml-4 mt-1 space-y-1">
      <Link 
        to={`/projects/${project.id}/issues`} 
        className="flex items-center space-x-3 px-2 py-1.5 text-sm rounded-md hover:bg-gray-800 text-gray-400 hover:text-gray-300"
      >
        <VscIssues className="w-4 h-4" />
        <span>Problemas</span>
      </Link>
      <Link 
        to={`/projects/${project.id}/cycles`} 
        className="flex items-center space-x-3 px-2 py-1.5 text-sm rounded-md hover:bg-gray-800 text-gray-400 hover:text-gray-300"
      >
        <VscCircleSlash className="w-4 h-4" />
        <span>Ciclos</span>
      </Link>
      <Link 
        to={`/projects/${project.id}/modules`} 
        className="flex items-center space-x-3 px-2 py-1.5 text-sm rounded-md hover:bg-gray-800 text-gray-400 hover:text-gray-300"
      >
        <VscExtensions className="w-4 h-4" />
        <span>Módulos</span>
      </Link>
      <Link 
        to={`/projects/${project.id}/views`} 
        className="flex items-center space-x-3 px-2 py-1.5 text-sm rounded-md hover:bg-gray-800 text-gray-400 hover:text-gray-300"
      >
        <VscTypeHierarchy className="w-4 h-4" />
        <span>Vistas</span>
      </Link>
      <Link 
        to={`/projects/${project.id}/pages`} 
        className="flex items-center space-x-3 px-2 py-1.5 text-sm rounded-md hover:bg-gray-800 text-gray-400 hover:text-gray-300"
      >
        <VscFiles className="w-4 h-4" />
        <span>Páginas</span>
      </Link>
    </div>
  );

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-[#1C1C1C] text-gray-300 border-r border-gray-800">
      <div className="p-4">
        {/* User Profile Section */}
        <div className="flex items-center space-x-2 mb-8">
          <div className="bg-blue-500 w-8 h-8 rounded-md flex items-center justify-center text-white font-semibold">
            G
          </div>
          <span className="text-white">Gabosca</span>
        </div>

        {/* New Project Button */}
        <button 
          onClick={onNewProject}
          className="flex items-center space-x-2 bg-transparent border border-gray-700 hover:bg-gray-800 text-gray-300 px-4 py-2 rounded-md mb-6 w-full"
        >
          <BsPencilSquare />
          <span>Nuevo problema</span>
        </button>

        {/* Main Navigation */}
        <div className="space-y-6">
          <div>
            <div className="space-y-2">
              <Link to="/" className="flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-800">
                <HiOutlineHome className="w-5 h-5" />
                <span>Inicio</span>
              </Link>
              <Link to="/my-work" className="flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-800">
                <HiOutlineDocumentText className="w-5 h-5" />
                <span>Tu trabajo</span>
              </Link>
              <Link to="/inbox" className="flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-800">
                <HiOutlineInbox className="w-5 h-5" />
                <span>Bandeja de entrada</span>
              </Link>
              <Link to="/drafts" className="flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-800">
                <HiOutlineDocumentText className="w-5 h-5" />
                <span>Borradores</span>
              </Link>
            </div>
          </div>

          {/* Workspace Section */}
          <div>
            <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Espacio de trabajo
            </h3>
            <div className="space-y-2">
              <Link to="/projects" className="flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-800">
                <HiOutlineViewGrid className="w-5 h-5" />
                <span>Proyectos</span>
              </Link>
              <Link to="/views" className="flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-800">
                <HiOutlineViewGrid className="w-5 h-5" />
                <span>Vistas</span>
              </Link>
              <Link to="/analytics" className="flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-800">
                <HiOutlineChartBar className="w-5 h-5" />
                <span>Analítica</span>
              </Link>
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Proyectos
            </h3>
            <div className="space-y-1">
              {projects.map(project => (
                <div key={project.id}>
                  <div 
                    className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-800 cursor-pointer group"
                    onClick={() => toggleProject(project.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <HiChevronRight 
                        className={`w-4 h-4 transform transition-transform duration-200 ${
                          expandedProject === project.id ? 'rotate-90' : ''
                        }`}
                      />
                      <span>🚀</span>
                      <span>{project.name}</span>
                    </div>
                    <button 
                      className="text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Aquí puedes agregar la lógica para el menú de opciones
                      }}
                    >
                      <BsThreeDots className="w-4 h-4" />
                    </button>
                  </div>
                  {expandedProject === project.id && <ProjectSubmenu project={project} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
