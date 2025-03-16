export interface User {
  id: string;
  tier: string;
  score: number;
  username: string;
  email: string;
  active: boolean;
  name: string;
  gender: "MALE" | "FEMALE" | "OTHER" | null;
  birth: Date | null;
}
