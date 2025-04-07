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
  status: string;
  type: "OPEN" | "IN_PROGRESS" | "DONE" | "CANCELLED";
  users: string[] | null;
}
