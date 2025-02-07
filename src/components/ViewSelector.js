import React from 'react';

const ViewSelector = ({ currentView, onViewChange }) => {
  return (
    <div className="flex items-center space-x-2 bg-[#2C2C2C] rounded-lg p-1">
      <button
        onClick={() => onViewChange('grid')}
        className={`p-2 rounded ${
          currentView === 'grid'
            ? 'bg-[#363636] text-white'
            : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Vista Grid"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`p-2 rounded ${
          currentView === 'list'
            ? 'bg-[#363636] text-white'
            : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Vista Lista"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default ViewSelector;
