export interface ExerciseInterface {
  id: string;
  name: string;
  userId: string;
  user: UserInterface;
  category: "cardio" | "strength";
  restTimeInSec: number;
  sets: number;
  times: number;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}
