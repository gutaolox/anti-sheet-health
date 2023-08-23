"use client";
import { UserSummaryContext } from "@/contexts/userSummary";
import { ExerciseInterface } from "@/interfaces/exercise";
import { useState, useContext, useEffect } from "react";

export function Exercise() {
  const { meals, setMealState } = useContext(UserSummaryContext);
  const [exercises, setExercises] = useState<ExerciseInterface[]>([]);

  return (
    <div>
      Treino (exercicio/Categorias/tempo ou repetições/tempo de descanso)
    </div>
  );
}
