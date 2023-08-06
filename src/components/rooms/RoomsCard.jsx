import { Link } from "react-router-dom";
import HeartButton from '../Button/HeartButton';

const RoomCard = ({ room }) => {
  const { price, category, dateRange, image, location } = room;
  const handleRoomDetails = id => {} 
  return (
    <Link to={`/room-details/${1}`} className="col-span-1 group cursor-pointer mb-2 ">
      <div className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden rounded-xl aspect-square">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover group-hover:scale-110 transition"
          />
          <div className="absolute right-4 top-2">
            <HeartButton></HeartButton>
          </div>
        </div>

        <div className="font-semibold text-lg">{location}</div>
        <div className="font-light text-neutral-500">{dateRange}</div>
        <div className="font-bold text-lg">$ {price} night</div>
      </div>
    </Link>
  );
};

export default RoomCard;
