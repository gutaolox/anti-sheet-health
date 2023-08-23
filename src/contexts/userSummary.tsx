"use client";

import {
  ExerciseInterface,
  HealthStatusInterface,
  MealInterface,
  UserInterface,
  UserSummaryInterface,
} from "@/interfaces";
import { customAxios } from "@/lib/customAxios";
import { getUser } from "@/lib/services/user";
import { createContext, ReactNode, useState, useEffect } from "react";

interface UserSummaryContextType {
  user: UserInterface;
  exercises: ExerciseInterface[];
  healthStatus: HealthStatusInterface;
  meals: MealInterface[];
  setMealState: (meal: MealInterface[]) => void;
  setExerciseState: (exercise: ExerciseInterface[]) => void;
  setHealthStatusState: (healthStatus: HealthStatusInterface) => void;
  setWeightState: (weight: number) => void;
}

export const UserSummaryContext = createContext({} as UserSummaryContextType);

interface UserSummaryContextProviderProps {
  children: ReactNode;
}

export function UserSummaryHealthStatusContextProvider({
  children,
}: UserSummaryContextProviderProps) {
  const [user, setUser] = useState<UserInterface>({} as UserInterface);
  const [exercises, setExercises] = useState<ExerciseInterface[]>([]);
  const [healthStatus, setHealthStatus] = useState<HealthStatusInterface>(
    {} as HealthStatusInterface
  );
  const [meals, setMeals] = useState<MealInterface[]>([]);

  function setMealState(meal: MealInterface[]) {
    setMeals(meal);
  }

  function setExerciseState(exercise: ExerciseInterface[]) {
    setExercises(exercise);
  }

  function setHealthStatusState(healthStatus: HealthStatusInterface) {
    setHealthStatus(healthStatus);
  }

  function setWeightState(weight: number) {
    setHealthStatus((previousState) => ({
      ...previousState,
      weight,
    }));
  }

  async function getUserData() {
    const { data } = await getUser();
    const { exercises, healthStatus, meals, ...user } = data.summary;
    setUser(user);
    setExercises(exercises);
    setHealthStatus(healthStatus[0]);
    setMeals(meals);
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
        setMealState,
        setExerciseState,
        setHealthStatusState,
        setWeightState,
      }}
    >
      {children}
    </UserSummaryContext.Provider>
  );
}
