import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('top stories reducer actions', () => {
  it('getRaceResultsSuccess should create GET_RACE_RESULTS_SUCCESS action', () => {
    const raceResults = "An article";
    expect(actions.getRaceResultsSuccess(raceResults)).toEqual({
      type: c.GET_RACE_RESULTS_SUCCESS,
      raceResults
    });
  });

  it('getRaceResultsFailure should create GET_RACE_RESULTS_FAILURE action', () => {
    const error = "An error";
    expect(actions.getRaceResultsFailure(error)).toEqual({
      type: c.GET_RACE_RESULTS_FAILURE,
      error
    });
  });
});