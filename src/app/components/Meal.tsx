import { UserSummaryContext } from "@/contexts/userSummary";
import { MealInterface } from "@/interfaces/meal";
import { Button } from "@mui/material";
import { useState, useContext, useEffect } from "react";

export function Meal() {
  const { meals } = useContext(UserSummaryContext);

  return (
    <div>
      Alimentos
      <Button>Nova Refeicao</Button>
    </div>
  );
}
