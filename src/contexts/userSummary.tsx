"use client";

import { ExerciseInterface } from "@/interfaces/exercise";
import { HealthStatusInterface } from "@/interfaces/healthStatus";
import { MealInterface } from "@/interfaces/meal";
import { UserInterface, UserSummaryInterface } from "@/interfaces/userSummary";
import { customAxios } from "@/lib/customAxios";
import { createContext, ReactNode, useState, useEffect } from "react";

interface UserSummaryContextType {
  user: UserInterface;
  meals: MealInterface[];
  healthStatus: HealthStatusInterface;
  exercises: ExerciseInterface[];
  setMealsInfo: (newMeals: MealInterface[]) => void;
  setExerciseInfo: (newExercises: ExerciseInterface[]) => void;
  setHealthStatusInfo: (newHealthStatus: HealthStatusInterface) => void;
}

export const UserSummaryContext = createContext({} as UserSummaryContextType);

interface UserSummaryContextProviderProps {
  children: ReactNode;
}

export function UserSummaryHealthStatusContextProvider({
  children,
}: UserSummaryContextProviderProps) {
  const [user, setUser] = useState<UserInterface>({} as UserInterface);
  const [healthStatus, setHealthStatus] = useState<HealthStatusInterface>(
    {} as HealthStatusInterface
  );
  const [meals, setMeals] = useState<MealInterface[]>({} as MealInterface[]);
  const [exercises, setExercises] = useState<ExerciseInterface[]>(
    {} as ExerciseInterface[]
  );

  function setMealsInfo(newMeals: MealInterface[]) {
    setMeals(newMeals);
  }

  function setExerciseInfo(newExercises: ExerciseInterface[]) {
    setExercises(newExercises);
  }

  function setHealthStatusInfo(newHealthStatus: HealthStatusInterface) {
    setHealthStatus(newHealthStatus);
  }

  async function getUserData() {
    const { data } = await customAxios(false).get<{
      summary: UserSummaryInterface;
    }>("/userSummary");
    const { healthStatus, exercises, meals, ...user } = data.summary;
    setUser(user);
    setHealthStatus(healthStatus[0] ?? ({} as HealthStatusInterface));
    setMeals(meals);
    setExercises(exercises);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <UserSummaryContext.Provider
      value={{
        user,
        exercises,
        healthStatus,
        meals,
        setExerciseInfo,
        setHealthStatusInfo,
        setMealsInfo,
      }}
    >
      {children}
    </UserSummaryContext.Provider>
  );
}
