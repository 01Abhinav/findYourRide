import { useRouter } from "next/router";
import Image from "next/image";

export default function CardHolder({ rides }) {
  return (
    <div className="card-deck p-2 my-3 ">
      {rides?.map((ride) => (
        <div
          className="card flex-row d-flex mx-5 my-2 bg-dark text-light"
          key={ride.id + ride.date}
        >
          <img
            className="card-img-top w-25"
            src={ride.map_url}
            height="150px"
            alt="Card image cap"
          />
          <div className="card-body">
            <div className="card-text">Ride ID: {ride.id}</div>
            <div className="card-text">
              Origin Station: {ride.origin_station_code}
            </div>
            <div className="card-text">
              Station path: [{ride.station_path.join(", ")}]
            </div>
            <div className="card-text">Date: {ride.date}</div>
            <div className="card-text">Distance: {ride.distance}</div>
          </div>
          <div className="d-flex flex-row fs-6">
            <div className="bg-black h-25 px-1">{ride.city}</div>
            <div className="bg-black h-25 px-1">{ride.state}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
