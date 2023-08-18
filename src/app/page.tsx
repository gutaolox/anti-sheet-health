"use client";

import { UserSummaryContext } from "@/contexts/userSummary";
import { Button } from "@mui/material";
import { useContext } from "react";
import { DateControl } from "./components/DateControl";
import { HealthStatus } from "./components/HealthStatus";
import { Meal } from "./components/Meal";
import { Exercise } from "./components/Excercise";

export default function Home() {
  const { userSummary } = useContext(UserSummaryContext);
  console.log(userSummary);
  return (
    <>
      <main>
        <h1>Home</h1>
        <DateControl />
        <div>
          <HealthStatus />
          <Meal />
          <Exercise />
        </div>
      </main>
    </>
  );
}
