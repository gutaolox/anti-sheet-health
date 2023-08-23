"use client";

import { UserSummaryContext } from "@/contexts/userSummary";
import { Button } from "@mui/material";
import { useContext } from "react";
import { DateControl, Exercise, HealthStatus, Meal } from "./components";

export default function Home() {
  //const { userSummary } = useContext(UserSummaryContext);
  //console.log(userSummary);
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
