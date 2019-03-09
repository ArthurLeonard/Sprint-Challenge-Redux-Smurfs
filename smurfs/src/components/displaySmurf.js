
import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from "../actions";




class DisplaySmurf extends React.Component {
   

    deleteSmurf = e => {
      e.preventDefault();
      this.props.deleteSmurf(e.target.id);

      console.log(`in delete Smurf method. ID is ${e.target.id}`)
    } //end deleteSmurf()



    render() {
        return (
          <div>         
            <div>
                <h2>{this.props.name}</h2> 
                <p>Age: {this.props.age}</p>
                <p>Height: {this.props.height}</p>
                {/* <p>ID: {this.props.id}</p> */}
                <button onClick = {this.deleteSmurf}
                        name="xbutton"
                        id = {this.props.id} 
                > X </button>
            </div> 
        </div>
      

        );
    } //end render

} //end Display Smurf

const mapStateToProps = state => {
    console.log(state);
  
    return {
      smurfs: state.smurfs,
      deletingSmurf: state.deletingSmurf
    };
  };
  
export default connect(mapStateToProps,{ deleteSmurf})( DisplaySmurf);



