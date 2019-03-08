
import React from 'react';
import { connect } from 'react-redux';

// import { CharacterList } from "../components";
// import connect from 'react-redux';
// import React from 'react';
import { getSmurfs } from "../actions";

class App extends React.Component {
    // constructor() {
    //   super();
      state = {  newToDo: '' };
   

    componentDidMount() {
      // call our action
      this.props.getSmurfs();
     }

    addSmurf = e => {
        e.preventDefault();
        console.log(`In addSmurf method`);
        this.props.addToDo(this.state.newToDo);
        this.setState({ newToDo: '' });
        console.log(`State is newToDo: ${this.state.newToDo}`);
        
    } //end addMember()

    handleChanges = e => {
        //e.preventDefault();
        this.setState({  newToDo: e.target.value   });
        //console.log(`In handleChanges method, ${e.target.value}`);
    }

    render() {
        return (
          <div>         
            <div className="smurfList">
              { /*<CharacterList smurfs={this.props.smurfs} />*/}
              { this.props.smurfs.map( smurf => { return <h2>{smurf.name}</h2> } ) }
            </div>
      

             <div>   
                <input
                     type="text"
                     name="newSmurf"
                     value={this.state.newToDo}
                     onChange={this.handleChanges}
                     placeholder="Add new smurf"
                /> 

                <button onClick={this.addSmurf}>Add To Do Task</button>
             </div>
           </div>   
        );
    } //end render

} //end Display class


const mapStateToProps = state => {
  console.log(state);

  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error,
    adding: state.adding
  };
};

  export default connect(mapStateToProps,{ getSmurfs })( App);

