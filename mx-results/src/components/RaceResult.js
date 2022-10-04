import React from "react";
import "./../App.css";
import { raceData } from "./RaceResultsJson"
import { raceDetail } from "./RaceDetailJson"

const RaceDetail = () => {
  return (
    <>
      <div className="raceDetail-container">
    {raceDetail.map((B, key) => {
          return (
            <div key={key}>
              {B.T +
                ".  " +
                B.E +
                " ," +
                B.S +
                ", " +
                B.R}
            </div>
          );
        })}
      </div>
    </>
  );
}


const RaceResults = () => {
  return (
    <>
      <div className="raceResults-container">
    {raceData.map((B, key) => {
          return (
            <div key={key}>
              {B.A +
                ".  " +
                B.F +
                " ," +
                B.V +
                ", " +
                B.T}
            </div>
          );
        })}
      </div>
    </>
  );
}
export { RaceDetail, RaceResults  }
