import { useQuery } from "@tanstack/react-query";
import type { IGamePreview } from "../types";

const useGameQuery = (query: string) => {
    const getQueriedGames = async (): Promise<IGamePreview[]> => {
        const response = await fetch("https://api.igdb.com/v4/games", {
            method: "POST",
            headers: {
                "client-id": "w71xq5h4z4h13f32a82xdrk1doefis",
                Authorization: "Bearer r1hmpcglidfw40s97vagqxwvls0d38",
                "Content-Type": "text/plain",
                Accept: "application/json",

            },
            body: query,
        });

        const data = await response.json();
        return data;
    }

    return useQuery({
        queryKey: ["gameQuery", query],
        queryFn: getQueriedGames,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        staleTime: Infinity,
    });
}

export default useGameQuery;