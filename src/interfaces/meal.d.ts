export interface MealInterface {
  id: string;
  meal: string;
  userId: string;
  category: "breakfast" | "lunch" | "dinner" | "snack";
  user: UserInterface;
  content: IngredientsInterface[];
  mealBeginTime: Date;
  mealEndTime?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IngredientsInterface {
  id: string;
  name: string;
  mealId: string;
  meal: MealInterface;
  quantity: number;
  unit: string;
  rateBase?: string;
  createdAt: Date;
  updatedAt: Date;
}
