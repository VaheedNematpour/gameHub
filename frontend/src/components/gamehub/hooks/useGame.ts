import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Game {
  id: number;
  title: string;
}

const useGame = () => {
  return useQuery<Game[], Error>({
    queryKey: ["games"],
    queryFn: () =>
      axios
        .get<Game[]>("http://localhost:8000/games/list/")
        .then((res) => res.data),
  });
};

export default useGame;
