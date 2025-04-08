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
  status:
    | "TODO"
    | "IN_PROGRESS"
    | "DONE"
    | "CANCELED"
    | "IN_REVIEW"
    | "PENDING"
    | "IN_TESTING";
  type: "USER" | "TEAM";
  users: string[] | null;
}
