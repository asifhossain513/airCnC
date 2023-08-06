import React from 'react';
import Button from "../../components/Button/Button";
import DatePicker from "./DatePicker";

const RoomReservation = () => {
    return (
        <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
            <div className="flex flex-row items-center gap-1 p-4">
                <div className="text-2xl font-semibold">$ 200</div>
                <div className="font-light text-neutral-400">night</div>
            </div>
            <hr />
            <DatePicker></DatePicker>
            <hr />
            <div className="p-4">
                <Button label="Reserver"></Button>
            </div>
            <hr />
            <div className="flex flex-row items-center p-4 justify-between font-semibold text-lg">

                <div>Total</div>
                <div>$ 200</div>
            </div>
        </div>
    );
};

export default RoomReservation;