import raceResultsReducer from '../../reducers/race-results-reducer';
import * as c from '../../actions/ActionTypes';

describe('raceResultsReducer', () => {

  let action;

  const initialState = {
    isLoaded: false,
    raceResults: [],
    error: null
  };

  test('should successfully throw a new error if a non-matching action type is passed into it', () => {
    expect(
      () => {
        raceResultsReducer(initialState, {type: null })
      }
    ).toThrowError("There is no action matching null.");
  });

  test('successfully getting top stories should change isLoaded to true and update raceResults', () => {
    const raceResults = "An article";
    action = {
      type: c.GET_RACE_RESULTS_SUCCESS,
      raceResults
    };

    expect(raceResultsReducer(initialState, action)).toEqual({
        isLoaded: true,
        raceResults: "An article",
        error: null
    });
  })
  
  test('failing to get raceResults should change isLoaded to true and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_RACE_RESULTS_FAILURE,
      error
    };

    expect(raceResultsReducer(initialState, action)).toEqual({
        isLoaded: true,
        raceResults: [],
        error: "An error"
    });
  });
});