import { Home } from "./Home";

export interface Pokemon {
  count: number;
  next: string;
  previous: any;
  results: Poke[];
}

export interface Poke {
  name: string;
  url: string;
}

export default Home;
