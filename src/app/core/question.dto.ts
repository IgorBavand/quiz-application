import { Alternative } from "./alternative.dto";

export interface Question {
  id: number;
  text: string;
  alternativeDtos: Alternative[];
}
