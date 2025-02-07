import React from 'react';

const TaskKanbanView = ({ tasks, title, status }) => {
  return (
    <div className="flex-1 min-w-[300px] bg-[#1C1C1C] rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <h3 className="text-white font-medium">{title}</h3>
          <span className="text-gray-400 text-sm">{tasks.length}</span>
        </div>
        <button className="text-gray-400 hover:text-white p-1 rounded-md hover:bg-[#2C2C2C] transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-[#2C2C2C] p-3 rounded-lg hover:ring-1 hover:ring-blue-500 cursor-pointer transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-white text-sm font-medium">{task.title}</h4>
                <div className="mt-2 flex items-center space-x-2">
                  {task.project && (
                    <span className="text-xs text-gray-400 bg-[#363636] px-2 py-1 rounded">
                      {task.project.name}
                    </span>
                  )}
                  {task.labels?.map((label, index) => (
                    <span
                      key={index}
                      className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {task.priority === 'high' && (
                  <span className="text-red-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </span>
                )}
              </div>
            </div>
            
            <div className="mt-3 flex items-center justify-between text-sm">
              <div className="flex -space-x-1">
                {task.assignees?.map((assignee, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white ring-2 ring-[#2C2C2C]"
                  >
                    {assignee.initials}
                  </div>
                ))}
              </div>
              {task.dueDate && (
                <span className="text-gray-400 text-xs">
                  {new Date(task.dueDate).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskKanbanView;
