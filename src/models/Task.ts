export interface Task {
  content: string;
  description: string;
  dueAt: string;
  id: string;
  owner: string;
  parent: null;
  priority: "HIGH" | "MEDIUM" | "LOW";
  resourceId: string;
  startAt: string;
  status: "OPEN" | "IN_PROGRESS" | "DONE" | "CANCELLED";
  type: "USER" | "TEAM";
  users: string[] | null;
}
