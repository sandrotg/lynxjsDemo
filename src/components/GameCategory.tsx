import useGameQuery from "../hooks/useGameQuery";
import GameCard from "./GameCard";

interface IGameCategory {
    id: string;
    title: string;
    query: string;
}

const GameCategory = (props: IGameCategory) => {

    const { title, query } = props;

    const { data: games, isPending, error } = useGameQuery(query);

    if (isPending) return <text>Loading...</text>;

    if (error) return <text>Error: {error.message}</text>;

    console.log(games);

    return (
        <view className="category">
            <text className="heading">{title}</text>
            {/* render games */}
            <list
                scroll-orientation="horizontal"
                list-type="single"
                span-count={1}
                className="horizontal-list"
            >
                {games?.map((game) => {
                    return (
                        <list-item
                            item-key={`list-item-${game.id}`}
                            key={`list-item-${game.id}`}
                        >
                            <GameCard {...game}/>
                        </list-item>
                    );
                })}
            </list>
        </view>
    )
}

export default GameCategory;