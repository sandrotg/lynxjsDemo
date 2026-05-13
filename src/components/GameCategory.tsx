import useGameQuery from "../hooks/useGameQuery";
import GameCard from "./GameCard";
import GameList from "./GameList";
import Loader from "./Loader";

interface IGameCategory {
    id: string;
    title: string;
    query: string;
}

const GameCategory = (props: IGameCategory) => {

    const { title, query } = props;

    const { data: games, isPending, error } = useGameQuery(query);

    if (isPending) return <Loader />;

    if (error) return <text>Error: {error.message}</text>;

    console.log(games);

    return (
        <view className="category">
            <text className="heading">{title}</text>
            {/* render games */}
            <GameList games={games} />
        </view>
    )
}

export default GameCategory;