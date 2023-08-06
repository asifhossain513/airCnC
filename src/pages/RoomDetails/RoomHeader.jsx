import React from 'react';
import Heading from "../../components/Heading/Heading";

const RoomHeader = () => {
    return (
      <>
        <Heading title="Valuvana" subtitle="Vietnam"></Heading>
        <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-826732383054098647/original/457337ee-af64-462f-90d0-b9fa1ce98a73.jpeg"
            alt=""
            className="object-cover w-full"
          />
        </div>
      </>
    );
};

export default RoomHeader;