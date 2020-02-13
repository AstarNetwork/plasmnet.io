export interface IRoadmap {
  id: number;
  month: string;
  task: string[];
}

export type IRoadmaps = Array<IRoadmap>;
