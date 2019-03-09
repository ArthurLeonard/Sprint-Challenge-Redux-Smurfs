/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/


import { ADDING, ADDING_SUCCESS, ADDING_FAILURE, FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE } from "../actions";
import { DELETING, DELETING_SUCCESS, DELETING_FAILURE} from "../actions";


const initialState = {
  smurfs: [],
  fetching: false,
  adding: false,
  //updatingSmurf: false,
  deletingSmurf: false,
  error: null
}


export default  (state = initialState, action) => {
  switch (action.type) {
    
    case FETCHING:
      return {
          fetching: true,
          adding: false,
          deletingSmurf: false,

          smurfs: [],
          error: ''
      };


    case FETCHING_SUCCESS:
    return {
      fetching: false,
      adding: false,
      deletingSmurf: false,

      smurfs: action.payload,
      error: ''
  };


    case FETCHING_FAILURE:
    return {
      fetching: false,
      adding: false,
      deletingSmurf: false,

      smurfs: [],
      error: action.payload
  };

    case ADDING:
     return {
      adding: true,
      fetching: false,
      deletingSmurf: false,

      smurfs: [],
      error: ''
    };


    case ADDING_SUCCESS:
    return {
      adding: false,
      fetching: false,
      deletingSmurf: false,

      smurfs: action.payload,
      error: ''
   };


    case ADDING_FAILURE:
    return {
      adding: false,
      fetching: false,
      deletingSmurf: false,

      smurfs: [],
      error: action.payload
    };

    case DELETING:
     return {
      adding: false,
      fetching: false,
      deletingSmurf: true,

      smurfs: [],
      error: ''
    };


    case DELETING_SUCCESS:
    return {
      adding: false,
      fetching: false,
      deletingSmurf: false,

      smurfs: action.payload,
      error: ''
   };


    case DELETING_FAILURE:
    return {
      adding: false,
      fetching: false,
      deletingSmurf: false,

      smurfs: [],
      error: action.payload
    };

    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
