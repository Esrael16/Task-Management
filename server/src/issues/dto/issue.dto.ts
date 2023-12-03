
export class CreateIssueDto {
  title: string;
  description: string;
  assignedTo: { connect: { id: number } }; // Assuming assignedTo is a foreign key referencing another entity
  taskId: { connect: { id: number } }; // Assuming taskId is a foreign key referencing another entity
  status?: string;
}

export class UpdateIssueDto {
  title?: string;
  description?: string;
  status?: string;
}

  
  