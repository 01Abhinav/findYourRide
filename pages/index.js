import Link from "next/link";
import axios from "axios";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/header";
import CardHolder from "../components/card-holder";
import Navbar from "../components/navbar";

export default function Home(props) {
  const { rides, user } = props;
  const [selected, setSelected] = useState("Nearest Rides");
  const [filter, setFilter] = useState({});
  const [ridesArr, setRidesArr] = useState([]);
  const userStationCode = user.station_code;
  // console.log(userStationCode);

  const upcomingRides = rides?.filter((ride) => {
    const currDate = new Date();
    const rideDate = new Date(ride.date);
    return currDate.getTime() < rideDate.getTime();
  });
  const pastRides = rides?.filter((ride) => {
    const currDate = new Date();
    const rideDate = new Date(ride.date);
    return currDate.getTime() > rideDate.getTime();
  });

  const cities = [...new Set(rides?.map((ride) => ride.city))];
  const states = [...new Set(rides?.map((ride) => ride.state))];

  useEffect(() => {
    const _ridesArr = ridesArr.filter((ride) => {
      // console.log(ride, ride[filter.name], filter.value);
      if (ride[filter.name] == filter.value) {
        return true;
      } else return false;
    });
    setRidesArr(_ridesArr);
    console.log(_ridesArr);
  }, [filter]);

  useEffect(() => {
    if (selected === "Upcoming Rides") setRidesArr(upcomingRides);
    else if (selected === "Past Rides") setRidesArr(pastRides);
    else setRidesArr(rides);
  }, [selected]);

  return (
    <div className={styles.container}>
      <Header user={user} />
      <Navbar
        setSelected={setSelected}
        selected={selected}
        numArr={[upcomingRides.length, pastRides.length]}
        filter={filter}
        setFilter={setFilter}
        cities={cities}
        states={states}
      />
      <CardHolder rides={ridesArr} loc={userStationCode} />
    </div>
  );
}

export async function getStaticProps() {
  const ridesRes = await axios.get("https://assessment.api.vweb.app/rides");
  const { data: ridesRaw } = ridesRes;
  const userRes = await axios.get("https://assessment.api.vweb.app/user");
  const { data: user } = userRes;

  const dist = (station_path) =>
    Math.min(...station_path.map((path) => Math.abs(path - user.station_code)));

  const rides = ridesRaw.map((ride) => ({
    ...ride,
    distance: dist(ride.station_path),
  }));

  rides.sort((ride1, ride2) => ride1.distance - ride2.distance);
  // console.log(rides, user);
  return {
    props: { rides, user },
  };
}
