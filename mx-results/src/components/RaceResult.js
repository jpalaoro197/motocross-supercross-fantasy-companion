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
              <Results
              position = {B.A}
                rider ={B.F}
                modelBike={B.V}
                raceTeam={B.T}
                />
            </div>
          );
        })}
      </div>
    </>
  );
}
const Results = ({ position, rider, modelBike, raceTeam }) => {
  if (!position) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{position}</h5>
          </td>
          <td>
            <h5>{rider}</h5>
          </td>
          <td>
            <h4>{modelBike}</h4>
          </td>
          <td>
            <p>{raceTeam}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export { RaceDetail, RaceResults  }
