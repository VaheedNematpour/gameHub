import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Category {
  id: number;
  title: string;
}

function useCategory() {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: () =>
      axios
        .get("http://localhost:8000/games/categories/")
        .then((res) => res.data),
  });
}

export default useCategory;
