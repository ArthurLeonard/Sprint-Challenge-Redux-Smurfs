/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';
export const ADDING  = 'ADDING';
export const ADDING_SUCCESS = 'ADDING_SUCCESS';
export const ADDING_FAILURE = 'ADDING_FAILURE';
export const DELETING  = 'DELETING';
export const DELETING_SUCCESS = 'DELETING_SUCCESS';
export const DELETING_FAILURE = 'DELETING_FAILURE';

export const getSmurfs = () => dispatch => {

    dispatch({ type: FETCHING });
    
    axios.get("http://localhost:3333/smurfs")
        .then( ({ data }) => {      console.log("Data is ", data);
                                    dispatch({ 
                                    type: FETCHING_SUCCESS,
                                    payload: data
                             });
       }) //end then

       .catch( err =>        { dispatch ({
                                    type: FETCHING_FAILURE,
                                    payload: err
                             });
       }); // end catch


}; //end getCharacters()



  export const addSmurff = (newSmurf) => dispatch => {

    dispatch({ type: ADDING });

    axios.post("http://localhost:3333/smurfs", newSmurf)
        .then( res => {      console.log("Got back after post request: ", res);
                                    dispatch({ 
                                    type: ADDING_SUCCESS,
                                    payload: res.data
                             });
       }) //end then

       .catch( err =>        { dispatch ({
                                    type: ADDING_FAILURE,
                                    payload: err
                             });
       }); // end catch



  }; // end addSmurf()


  // deleteItem = (e, id) => {
  //   e.preventDefault();
  //   console.log('now in deleteItem in App');
  //   axios
  //     .delete(`http://localhost:3333/smurfs/${id}`)
  //     .then(res => {
  //       console.log('Data is back, now set state and reroute', res.data);
  //       this.setState({
  //         smurfs: res.data
  //       });
  //       // this.props.history.push('/item-list');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };


  export const deleteSmurf = (id) => dispatch => {
    console.log('now in deleteItem in actions');
    dispatch({ type: DELETING });

    axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then( res => {      console.log("Got back after delete request: ", res);
                                    dispatch({ 
                                    type: DELETING_SUCCESS,
                                    payload: res.data
                             });
       }) //end then

       .catch( err =>        { dispatch ({
                                    type: DELETING_FAILURE,
                                    payload: err
                             });
       }); // end catch



  }; // end addSmurf()
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
