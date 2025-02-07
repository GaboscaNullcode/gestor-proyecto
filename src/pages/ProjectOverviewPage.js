import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineClock, HiOutlineCalendar, HiOutlineTag, HiOutlineFlag } from 'react-icons/hi';
import { projectService } from '../services/projectService';

const ProjectOverviewPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await projectService.getProjectById(id);
        setProject(data);
      } catch (err) {
        setError('Error al cargar los detalles del proyecto');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProject();
  }, [id]);

  const PropertyBadge = ({ icon: Icon, label, value, className = "" }) => (
    <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-800/50">
      <Icon className="w-4 h-4 text-gray-400" />
      {label && <span className="text-gray-400">{label}:</span>}
      <span className={`text-sm font-medium ${className}`}>{value}</span>
    </div>
  );

  const Section = ({ title, children }) => (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>
      {children}
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="w-8 h-8 border-t-2 border-blue-500 rounded-full animate-spin" />
          <p className="text-gray-400 text-sm font-medium">Cargando detalles del proyecto...</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 p-4 rounded-lg border border-red-500/20"
        >
          <p className="text-red-500 font-medium">{error}</p>
        </motion.div>
      </div>
    );
  }

  if (!project) return null;

  return (
    <div className="min-h-screen bg-[#1C1C1C] py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">{project.name}</h1>
              <p className="mt-2 text-gray-400">{project.description}</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Editar proyecto
            </button>
          </div>

          {/* Properties */}
          <div className="flex flex-wrap gap-3">
            <PropertyBadge 
              icon={HiOutlineTag} 
              value={project.status}
              className={project.status === 'Completado' ? 'text-green-400' : 'text-blue-400'}
            />
            <PropertyBadge 
              icon={HiOutlineFlag} 
              value={project.priority}
              className={project.priority === 'Alta' ? 'text-orange-400' : 'text-gray-300'}
            />
            <PropertyBadge 
              icon={HiOutlineCalendar} 
              value={new Date(project.start_date).toLocaleDateString()}
            />
            <PropertyBadge 
              icon={HiOutlineClock} 
              value={new Date(project.end_date).toLocaleDateString()}
            />
          </div>
        </div>

        {/* Resources Section */}
        <Section title="Recursos">
          <div className="bg-gray-800/30 rounded-lg">
            {project.resources && project.resources.length > 0 ? (
              <ul className="divide-y divide-gray-800">
                {project.resources.map((resource, index) => (
                  <li key={index} className="px-4 py-3 flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-300">{resource}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-4 py-3 text-gray-400">No hay recursos asignados</p>
            )}
          </div>
        </Section>

        {/* Team Section */}
        <Section title="Equipo">
          <div className="bg-gray-800/30 rounded-lg">
            {project.members && project.members.length > 0 ? (
              <ul className="divide-y divide-gray-800">
                {project.members.map((member, index) => (
                  <li key={index} className="px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="text-white text-sm">
                          {member.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-300">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-4 py-3 text-gray-400">No hay miembros asignados</p>
            )}
          </div>
        </Section>

        {/* Progress Section */}
        <Section title="Progreso">
          <div className="bg-gray-800/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Tareas completadas</span>
              <span className="text-gray-300">75%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }} />
            </div>
          </div>
        </Section>
      </motion.div>
    </div>
  );
};

export default ProjectOverviewPage;
