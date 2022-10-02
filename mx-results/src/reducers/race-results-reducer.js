import * as c from '../actions/ActionTypes';

const raceResultsReducer = (state, action) => {
  switch (action.type) {
    case c.GET_RACE_RESULTS_SUCCESS:
      return {
        ...state, 
        isLoaded: true,
        raceResults: action.raceResults
      };
      case c.GET_RACE_RESULTS_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
};

export default raceResultsReducer;