import React from 'react';
import { Link } from 'react-router-dom';

const ProjectGridView = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link
          to={`/projects/${project.id}`}
          key={project.id}
          className="block bg-[#2C2C2C] rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all duration-200"
        >
          {project.coverImage && (
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={project.coverImage}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <h3 className="text-white font-medium">{project.name}</h3>
            </div>
            <p className="mt-2 text-gray-400 text-sm line-clamp-2">
              {project.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex -space-x-1">
                {project.members?.map((member, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white ring-2 ring-[#2C2C2C]"
                  >
                    {member.initials}
                  </div>
                ))}
              </div>
              <span className="text-gray-400 text-sm">
                {project.updatedAt}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectGridView;
