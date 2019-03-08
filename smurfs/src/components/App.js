
import React from 'react';
import { connect } from 'react-redux';

// import { CharacterList } from "../components";
// import connect from 'react-redux';
// import React from 'react';
import { getSmurfs } from "../actions";
import { addSmurff }  from "../actions";

class App extends React.Component {
    // constructor() {
    //   super();
      state = {  name: '',
                 age: "",
                 height: ''
              };
   

    componentDidMount() {
      // call our action
      this.props.getSmurfs();
     }

    addSmurf = e => {
        e.preventDefault();
        console.log(`In addSmurf method`);
        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
    
        };
        this.props.addSmurff(newSmurf);
        this.setState( {  name: '',
                          age: "",
                          height: ''  
                      });
        console.log(`State is : ${this.state.name}`);
        
    } //end addMember()

    handleChanges = e => {
        //e.preventDefault();
        this.setState({  [e.target.name]: e.target.value   });
        console.log(`In handleChanges method, ${e.target.value} ${this.state.name}`);
    }

    render() {
        return (
          <div>         
            <div className="smurfList">
              { /*<CharacterList smurfs={this.props.smurfs} />*/}
              { this.props.smurfs.map( smurf => { return <div><h2>{smurf.name}</h2> <p>Age: {smurf.age}</p><p>Height: {smurf.height}</p></div> } ) }
            </div>
      

             <div>   
               <form onSubmit = {this.addSmurf}>
                <input
                     type="text"
                     name="name"
                     value={this.state.name}
                     onChange={this.handleChanges}
                     placeholder="name"
                /> 
                <input
                     type="text"
                     name="age"
                     value={this.state.age}
                     onChange={this.handleChanges}
                     placeholder="age"
                /> 
                <input
                     type="text"
                     name="height"
                     value={this.state.height}
                     onChange={this.handleChanges}
                     placeholder="height"
                /> 


                </form>

                <button onClick={this.addSmurf}>Add New Smurf</button>
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

  export default connect(mapStateToProps,{ getSmurfs, addSmurff })( App);

