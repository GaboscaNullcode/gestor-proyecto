import React from 'react';

const TaskTableView = ({ tasks }) => {
  return (
    <div className="bg-[#1C1C1C] rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-700">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Título
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Estado
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Proyecto
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Prioridad
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Asignados
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Fecha límite
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {tasks.map((task) => (
            <tr key={task.id} className="hover:bg-[#2C2C2C] transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm font-medium text-white">{task.title}</div>
                    <div className="flex mt-1 space-x-2">
                      {task.labels?.map((label, index) => (
                        <span
                          key={index}
                          className="text-xs text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${task.status === 'done' ? 'bg-green-100 text-green-800' : 
                    task.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'}`}>
                  {task.status === 'done' ? 'Completado' :
                    task.status === 'in_progress' ? 'En progreso' : 'Backlog'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">{task.project?.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center
                  ${task.priority === 'high' ? 'text-red-500' :
                    task.priority === 'medium' ? 'text-yellow-500' :
                    'text-gray-500'}`}>
                  {task.priority === 'high' && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  )}
                  {task.priority === 'medium' && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                    </svg>
                  )}
                  {task.priority === 'low' && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex -space-x-1">
                  {task.assignees?.map((assignee, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white ring-2 ring-[#1C1C1C]"
                    >
                      {assignee.initials}
                    </div>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {task.dueDate && new Date(task.dueDate).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTableView;
