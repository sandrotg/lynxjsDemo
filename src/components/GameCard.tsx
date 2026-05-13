import type { IGamePreview } from "../types";
import { getImageUrl, handleTapEnd, handleTapStart } from "../utils";
import { useNavigate } from 'react-router';

const GameCard = (props: IGamePreview) => {

    const nav = useNavigate();

    const {id, name, cover} = props;
    return(
        <view className="card"
        style={{
            width: "150px",
        }}
        bindtap={()=>nav(`/game-details/${id}`)}
        main-thread:bindtouchstart={handleTapStart}
        main-thread:bindtouchend={handleTapEnd}
        >
            <image src={getImageUrl(cover?.image_id)} className="image"/>

            <text className="card-title" text-maxline="2">{name}</text>
        </view>
    )
}

export default GameCard;