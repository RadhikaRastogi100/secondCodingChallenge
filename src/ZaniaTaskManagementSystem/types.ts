export interface Task {
    id: number;
    category: string;
    title: string;
    description: string;
    status: "pending" | "completed";
  }
  