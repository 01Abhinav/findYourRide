import { useRouter } from "next/router";
import Image from "next/image";

export default function CardHolder({ rides }) {
  return (
    <div className="card-deck">
      {rides?.map((ride) => (
        <div
          className="card-back card flex-row d-flex mx-5 my-2 text-light"
          key={ride.id + ride.date}
        >
          <img
            className="card-img-top w-25"
            src={ride.map_url}
            height="150px"
            alt="Card image cap"
          />
          <div className="card-body">
            <div className="card-text">
              <span className="info">Ride ID: </span> {ride.id}
            </div>
            <div className="card-text">
              <span className="info"> Origin Station: </span>
              {ride.origin_station_code}
            </div>
            <div className="card-text">
              <span className="info"> Station path: </span> [
              {ride.station_path.join(", ")}]
            </div>
            <div className="card-text">
              {" "}
              <span className="info">Date: </span> {ride.date}
            </div>
            <div className="card-text">
              {" "}
              <span className="info">Distance: </span>
              {ride.distance}
            </div>
          </div>
          <div className="fs-6 d-flex flex-row ">
            <div className="px-2 m-2 border-style">{ride.city}</div>
            <div className="px-2 m-2 border-style">{ride.state}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
