import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import Loader from "../Shared/Loader";
import RoomsCard from "./RoomsCard";
import Heading from "../Heading/Heading";

const Rooms = () => {
    const [rooms, setRooms,] = useState([]);
    const [loading, setLoading]= useState(false);
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    console.log(category);
    useEffect(() => {
      fetch('./rooms.json')
        .then((res) => res.json())
        .then((data) => {
          if (category) {
            const filtered = data.filter((room) => room.category === category);
            setRooms(filtered);
          }
          else{
                      setRooms(data);

          }
          console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [category]);

    if(loading){
        return <Loader></Loader>
    }

    return (
      <Container>
        {rooms && rooms.length> 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-3">
          {rooms.map((room) => (
            <RoomsCard key={room.image} room={room}></RoomsCard>
          ))}
        </div> : <Heading title='No room Available in this category'
        subtitle='Please select Other categories'
        center={true}></Heading>}
      </Container>
    );
};

export default Rooms;