import { useParams } from 'react-router';
import BackButton from '../components/BackButton';
import useGame from '../hooks/useGame';
import { getImageUrl } from '../utils';
import ratingIcon from "../assets/rating.png";
import DateItem from '../components/DateItem';

const GameDetailsScreen = () => {

    let { id } = useParams();

    const { data: game, isPending, error } = useGame(id!);

    if (isPending) return <text>Loading...</text>;
    if (error) return <text>Error: {error.message}</text>;

    const { name,
        cover,
        rating,
        release_dates,
        summary,
        genres,
        screenshots,
        platforms,
        involved_companies,
        similar_games, } = game;

    return (
        <scroll-view className="scroll-container">
            <view className="scroll-content"
                style={{ padding: "20px" }}>
                <BackButton />
                <image
                    src={getImageUrl(cover?.image_id)}
                    className="image flip-in"
                    style={{
                        width: "60%",
                        aspectRatio: 3 / 4,
                        alignSelf: "center",
                    }}
                />
                <view className='game-info'>
                    <text className="game-name">{name}</text>
                    {rating && (
                        <view className="rating-container">
                            <image src={ratingIcon} className="rating-icon" />
                            <text className="rating">{(rating / 10).toFixed(1)}</text>
                        </view>
                    )}
                </view>
                
                <text className="developer">By {involved_companies[0]?.company.name}</text>
                <DateItem date={release_dates[0]?.human} />
                <text className="summary">{summary}</text>
            </view>
        </scroll-view>
    )
}

export default GameDetailsScreen;