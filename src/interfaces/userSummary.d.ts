import { Ingredients } from "@prisma/client";

export interface UserInterface {
  id: string;
  email: string;
  name?: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSummaryInterface extends UserInterface {
  meals: MealInterface[];
  exercises: ExerciseInterface[];
  healthStatus: HealthStatusInterface[];
}
