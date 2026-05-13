import { useQuery } from "@tanstack/react-query";
import type { IGameEvent } from "../types.ts";

const useGameEvent = (id: string) => {
    const getGameEvent = async (): Promise<IGameEvent> => {
        const query = `
      fields id, name, description, event_logo.image_id, start_time, games.cover.image_id, games.name;
      where id=${id};
    `;

        const response = await fetch("https://api.igdb.com/v4/events", {
            method: "POST",
            headers: {
                "client-id": "w71xq5h4z4h13f32a82xdrk1doefis",
                Authorization: "Bearer r1hmpcglidfw40s97vagqxwvls0d38",
                "Content-Type": "text/plain",
                Accept: "application/json",
            },
            body: query,
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch games: ${response.statusText}`);
        }

        const data = await response.json();
        return data[0];
    };

    return useQuery({
        queryKey: ["gameEvent", id],
        queryFn: getGameEvent,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        staleTime: Infinity,
    });
};

export default useGameEvent;