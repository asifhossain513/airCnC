import React from 'react';
import Container from "../../components/Shared/Container";
import Heading from "../../components/Heading/Heading";
import RoomHeader from "./RoomHeader";
import RoomInfo from "./RoomInfo";
import DatePicker from "./DatePicker";
import RoomReservation from "./RoomReservation";

const RoomDetails = () => {
    return (
      <Container>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-6">
            <RoomHeader></RoomHeader>
            <div className="grid grid-cols-1  md:grid-cols-7 md:gap-10 mt-5">
              <RoomInfo></RoomInfo>
              <div className="mb-10 md:col-span-3 order-first md:order-last">
                <RoomReservation></RoomReservation>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default RoomDetails;