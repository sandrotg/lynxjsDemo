import type { IGamePreview } from "../types";
import { getImageUrl } from "../utils";
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
        >
            <image src={getImageUrl(cover?.image_id)} className="image"/>

            <text className="card-title">{name}</text>
        </view>
    )
}

export default GameCard;