import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Platform {
  id: number;
  title: string;
}

export interface Game {
  id: number;
  title: string;
  platforms: Platform[];
  score: number;
}

const useGame = () => {
  return useQuery<Game[], Error>({
    queryKey: ["games"],
    queryFn: () =>
      axios
        .get<Game[]>("http://localhost:8000/games/list/")
        .then((res) => res.data),

    staleTime: 10 * 1000,
    keepPreviousData: true,
  });
};

export default useGame;
