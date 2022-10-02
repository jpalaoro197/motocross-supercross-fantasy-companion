import * as c from './ActionTypes';

export const getRaceResultsSuccess = (raceResults) => ({
  type: c.GET_RACE_RESULTS_SUCCESS,
  raceResults
});

export const getRaceResultsFailure = (error) => ({
  type: c.GET_RACE_RESULTS_FAILURE,
  error
});