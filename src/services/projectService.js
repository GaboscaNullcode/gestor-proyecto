// import { supabase } from './supabaseClient'

// Datos de ejemplo para desarrollo
const mockProjects = [
  {
    id: 1,
    name: 'Diseño Website',
    description: 'Rediseño completo del sitio web corporativo con nuevo sistema de diseño',
    status: 'active',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    members: [{ initials: 'JD' }, { initials: 'AM' }],
    updatedAt: 'Hace 2 días'
  },
  {
    id: 2,
    name: 'App Móvil',
    description: 'Desarrollo de aplicación móvil para iOS y Android usando React Native',
    status: 'active',
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    members: [{ initials: 'RK' }, { initials: 'LP' }],
    updatedAt: 'Hace 1 día'
  },
  {
    id: 3,
    name: 'Dashboard Analytics',
    description: 'Implementación de dashboard para análisis de datos en tiempo real',
    status: 'active',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    members: [{ initials: 'MJ' }, { initials: 'ST' }],
    updatedAt: 'Hace 3 horas'
  }
];

export const projectService = {
  async createProject(project) {
    // Simulamos una llamada a la API
    return new Promise((resolve) => {
      setTimeout(() => {
        const newProject = {
          ...project,
          id: mockProjects.length + 1,
          coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
          members: [{ initials: 'NEW' }],
          updatedAt: 'Justo ahora'
        };
        mockProjects.push(newProject);
        resolve(newProject);
      }, 500);
    });
  },

  async getProjects() {
    // Simulamos una llamada a la API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProjects);
      }, 500);
    });
  }
}
