// Datos de ejemplo para desarrollo
const mockTasks = [
  {
    id: 1,
    title: 'Configurar desarrollo de marca y web',
    status: 'backlog',
    priority: 'high',
    assignees: [{ initials: 'JD', avatar: null }],
    dueDate: '2025-02-14',
    labels: ['Design', 'Web'],
    project: { name: 'Marketing' }
  },
  {
    id: 2,
    title: 'Planificar la nueva página de marketing',
    status: 'in_progress',
    priority: 'medium',
    assignees: [{ initials: 'AM', avatar: null }],
    dueDate: '2025-02-20',
    labels: ['Marketing'],
    project: { name: 'Marketing' }
  },
  {
    id: 3,
    title: 'Interfaz de gestión de usuarios',
    status: 'done',
    priority: 'low',
    assignees: [{ initials: 'RK', avatar: null }],
    dueDate: '2025-02-10',
    labels: ['UI/UX'],
    project: { name: 'Dashboard' }
  }
];

export const taskService = {
  async getTasks() {
    // Simulamos una llamada a la API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockTasks);
      }, 500);
    });
  },

  async createTask(task) {
    // Simulamos una llamada a la API
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTask = {
          ...task,
          id: mockTasks.length + 1,
          assignees: [{ initials: 'NEW', avatar: null }],
        };
        mockTasks.push(newTask);
        resolve(newTask);
      }, 500);
    });
  },

  async updateTaskStatus(taskId, newStatus) {
    // Simulamos una llamada a la API
    return new Promise((resolve) => {
      setTimeout(() => {
        const task = mockTasks.find(t => t.id === taskId);
        if (task) {
          task.status = newStatus;
          resolve(task);
        }
      }, 500);
    });
  }
};
