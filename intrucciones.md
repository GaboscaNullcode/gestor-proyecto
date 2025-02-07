# Instrucciones para la Aplicación Web de Gestión de Proyectos

## Descripción General
Esta aplicación web está diseñada para la gestión eficiente de proyectos, ofreciendo funcionalidades avanzadas como la creación de proyectos, tareas e hitos, visualización en diferentes formatos y generación de wikis colaborativos. La aplicación se construirá utilizando **React** y **Supabase**, e integrará **yoopta.dev** como editor de contenido para los wikis.

## Características Principales

### 1. Gestión de Proyectos y Tareas
- **Creación, actualización y eliminación de proyectos**.
- **Gestión de tareas** con asignación de responsables y fechas de vencimiento.
- **Definición de hitos** para organizar y segmentar el progreso del proyecto.

### 2. Visualización de Tareas
- **Vista de lista:** Mostrar tareas en formato de lista con filtros y opciones de ordenamiento.
- **Vista Kanban:** Implementar un sistema de tableros para la organización de tareas por estado.
- **Vista Calendario:** Integración con un calendario para visualizar fechas límite y plazos de entrega.

### 3. Generación de Wikis
- **Editor de wikis basado en yoopta.dev** para documentar información clave del proyecto.
- **Formato similar a Notion**, permitiendo agregar texto enriquecido, listas, imágenes y otros elementos.
- **Historial de cambios** y control de versiones en los documentos del wiki.

## Tecnologías Utilizadas
### Frontend
- **React** con Vite para optimizar la velocidad de desarrollo.
- **Tailwind CSS** para el diseño responsivo y moderno.
- **React Query** para el manejo eficiente del estado de datos.

### Backend y Base de Datos
- **Supabase** como backend-as-a-service, proporcionando autenticación, almacenamiento y base de datos PostgreSQL.
- **Auth con Supabase** para gestionar sesiones de usuario de manera segura.

### Integraciones y Herramientas
- **yoopta.dev** como editor de texto avanzado.
- **FullCalendar** para la visualización en calendario.
- **DND-Kit** o **React-Beautiful-DnD** para la funcionalidad de arrastrar y soltar en la vista Kanban.
- **React Hook Form + Zod** para validación y gestión de formularios.

## Estructura del Proyecto
El código seguirá una estructura modular con las siguientes carpetas principales:

```plaintext
/src
  /components  # Componentes reutilizables
  /pages       # Páginas de la aplicación
  /hooks       # Hooks personalizados
  /context     # Contextos globales
  /services    # Llamadas a la API de Supabase
  /utils       # Funciones utilitarias
  /assets      # Imágenes y archivos estáticos
```