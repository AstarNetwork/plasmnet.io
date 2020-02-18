export interface IRoadmap {
  id: number;
  month: string;
  task: string[];
}

export type IRoadmaps = Array<IRoadmap>;

export interface ITime {
  Days: number;
  Hours: number;
  Mins: number;
  Secs: number;
}
