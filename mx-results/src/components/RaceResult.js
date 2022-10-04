import React from "react";
import "./../App.css";
import { raceData } from "./RaceResultsJson"




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
export default RaceResults
