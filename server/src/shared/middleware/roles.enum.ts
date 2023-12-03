// enums.tsx
export enum UserRole {
    Admin = 'admin',
    RegularUser = 'regularUser',
  }
  
  export enum Permission {
    ViewTasks = 'viewTasks',
    UpdateTaskProgress = 'updateTaskProgress',
    ManageProjects = 'manageProjects', // Admin-only permission
    // Add more permissions as needed
  }
  