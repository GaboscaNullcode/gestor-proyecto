import React from 'react';
import { Link } from 'react-router-dom';

const ProjectListView = ({ projects }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="overflow-hidden rounded-lg bg-[#2C2C2C]">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-300 sm:pl-6">
                Nombre
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">
                Descripción
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">
                Estado
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">
                Miembros
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">
                Última actualización
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {projects.map((project) => (
              <tr 
                key={project.id}
                className="hover:bg-[#363636] transition-colors"
              >
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                  <Link to={`/projects/${project.id}`} className="flex items-center">
                    <div className="h-8 w-8 flex-shrink-0 rounded bg-gray-700 flex items-center justify-center mr-3">
                      📁
                    </div>
                    <div className="font-medium text-white">{project.name}</div>
                  </Link>
                </td>
                <td className="px-3 py-4 text-sm text-gray-300">
                  <div className="line-clamp-2">{project.description}</div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-gray-300">Activo</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                  <div className="flex -space-x-1">
                    {project.members?.map((member, index) => (
                      <div
                        key={index}
                        className="h-6 w-6 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white ring-2 ring-[#2C2C2C]"
                      >
                        {member.initials}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                  {project.updatedAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectListView;
