export interface HealthStatusInterface {
  id: string;
  userId: string;
  user: UserInterface;
  weight: number;
  measures: MeasuresInterface[];
  createdAt: Date;
  updatedAt: Date;
}

export interface MeasuresInterface {
  id: string;
  measure: number;
  healthStatusId: string;
  healthStatus: HealthStatusInterface;
  unit: string;
  createdAt: Date;
  updatedAt: Date;
}
