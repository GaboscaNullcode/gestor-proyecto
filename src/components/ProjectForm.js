import React, { useState } from 'react';

const ProjectForm = ({ onSubmit, onCancel }) => {
  const [project, setProject] = useState({
    name: '',
    description: '',
    visibility: 'public'
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!project.name.trim()) {
      newErrors.name = 'El nombre del proyecto es requerido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(project);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
            📁
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Proyecto de prueba"
              value={project.name}
              onChange={(e) => {
                setProject({ ...project, name: e.target.value });
                if (errors.name) {
                  setErrors({ ...errors, name: '' });
                }
              }}
              className={`w-full bg-transparent text-xl text-white border-none focus:outline-none focus:ring-0 placeholder-gray-500 ${
                errors.name ? 'border-red-500' : ''
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>
        </div>
        <textarea
          placeholder="Descripción del proyecto de prueba"
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
          className="w-full h-32 bg-[#2C2C2C] text-white rounded-lg p-4 border-none focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-500 resize-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="visibility"
            value="public"
            checked={project.visibility === 'public'}
            onChange={(e) => setProject({ ...project, visibility: e.target.value })}
            className="text-blue-500 focus:ring-blue-500 bg-[#2C2C2C] border-gray-600"
          />
          <span className="text-gray-400">Public</span>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="visibility"
            value="lead"
            checked={project.visibility === 'lead'}
            onChange={(e) => setProject({ ...project, visibility: e.target.value })}
            className="text-blue-500 focus:ring-blue-500 bg-[#2C2C2C] border-gray-600"
          />
          <span className="text-gray-400">Lead</span>
        </div>
      </div>
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1C1C1C] transition-colors"
        >
          Create project
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
