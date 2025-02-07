// import { supabase } from './supabaseClient'

// Datos de ejemplo para desarrollo
const mockProjects = [
  {
    id: 1,
    name: 'Diseño Website',
    description: 'Rediseño completo del sitio web corporativo con nuevo sistema de diseño. Incluye implementación de nuevas funcionalidades y optimización del rendimiento.',
    status: 'En progreso',
    priority: 'Alta',
    start_date: '2024-01-15',
    end_date: '2024-03-30',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    members: [
      { name: 'Juan Díaz', role: 'Diseñador UI/UX' },
      { name: 'Ana Martínez', role: 'Desarrollador Frontend' }
    ],
    resources: [
      'Figma Design System',
      'React Component Library',
      'Analytics Dashboard',
      'Documentation Wiki'
    ],
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-02-07T15:30:00Z'
  },
  {
    id: 2,
    name: 'App Móvil',
    description: 'Desarrollo de aplicación móvil para iOS y Android usando React Native. Implementación de funcionalidades offline y sincronización en tiempo real.',
    status: 'Planificación',
    priority: 'Media',
    start_date: '2024-02-01',
    end_date: '2024-05-30',
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    members: [
      { name: 'Roberto Klein', role: 'Tech Lead' },
      { name: 'Laura Pérez', role: 'Desarrollador Mobile' }
    ],
    resources: [
      'React Native CLI',
      'Firebase SDK',
      'Design System Mobile',
      'Testing Devices'
    ],
    created_at: '2024-02-01T09:00:00Z',
    updated_at: '2024-02-06T16:45:00Z'
  },
  {
    id: 3,
    name: 'Dashboard Analytics',
    description: 'Implementación de dashboard para análisis de datos en tiempo real con visualizaciones interactivas y reportes personalizados.',
    status: 'Completado',
    priority: 'Alta',
    start_date: '2023-12-01',
    end_date: '2024-01-30',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    members: [
      { name: 'María Jiménez', role: 'Data Scientist' },
      { name: 'Santiago Torres', role: 'Backend Developer' }
    ],
    resources: [
      'Tableau Dashboard',
      'Python Data Pipeline',
      'AWS Infrastructure',
      'Documentation'
    ],
    created_at: '2023-12-01T08:00:00Z',
    updated_at: '2024-01-30T17:00:00Z'
  }
];

export const projectService = {
  async getProjects() {
    // Simulamos una llamada a la API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProjects);
      }, 500);
    });
  },

  async getProjectById(id) {
    // Simulamos una llamada a la API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const project = mockProjects.find(p => p.id === parseInt(id));
        if (project) {
          resolve(project);
        } else {
          reject(new Error('Proyecto no encontrado'));
        }
      }, 500);
    });
  },

  async createProject(project) {
    // Simulamos una llamada a la API
    return new Promise((resolve) => {
      setTimeout(() => {
        const newProject = {
          ...project,
          id: mockProjects.length + 1,
          coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
          members: [],
          resources: [],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        mockProjects.push(newProject);
        resolve(newProject);
      }, 500);
    });
  }
};
