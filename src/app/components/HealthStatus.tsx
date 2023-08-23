"useClient";

import { UserSummaryContext } from "@/contexts/userSummary";
import { HealthStatusInterface } from "@/interfaces/healthStatus";
import { setWeight } from "@/lib/services";
import { Button, Input, Typography } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import * as zod from "zod";

const newWeightSchema = zod.object({
  weight: zod.number().min(10).max(1000),
});

export function HealthStatus() {
  const { healthStatus, setWeightState } = useContext(UserSummaryContext);
  const [error, setError] = useState<string>("");

  function handleNewWeight(event: React.ChangeEvent<HTMLInputElement>) {
    const validation = newWeightSchema.safeParse({
      weight: event.target.value,
    });
    if (validation.success) {
      setWeightState(validation.data.weight);
    } else {
      setError(validation.error.errors[0].message);
    }
  }
  // TODO: handle new measure

  // TODO : handle new health status TEST THIS
  useEffect(() => {
    setWeight(healthStatus.weight, new Date());
  }, [healthStatus]);

  // TODO: check reducer
  return (
    <section>
      <div>
        <h2>Peso</h2>
        <Typography>{healthStatus.weight}Kg </Typography>
        <div>
          <Input
            type="number"
            placeholder="Peso"
            error={!!error}
            onChange={handleNewWeight}
          />
        </div>
      </div>
      <div>
        Medidas
        <Button>Nova Medida</Button>
      </div>
    </section>
  );
}
