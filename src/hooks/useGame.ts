import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";

const apiclient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiclient.get(slug),
  });

export default useGame;
