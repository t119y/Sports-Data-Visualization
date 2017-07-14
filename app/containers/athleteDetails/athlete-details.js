import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
require('./athlete-details.scss');

class AthleteDetails extends Component {
    render() {
        if (this.props.athlete.thumbnail){
            return (
            <div className="athleteDetails">
                <img src={this.props.athlete.thumbnail}/>
                <div>
                    <h2>{this.props.athlete.first} {this.props.athlete.last},  {this.props.athlete.age} years old</h2>
                    <h2>{this.props.athlete.description}</h2>
                </div>
            </div>
        );
        }else{
            return (
                <div>
                </div>
            )
        }
        
    }
}

function mapStateToProps(state){
    return {
        athlete: state.activeAthlete
    }
}

export default connect(mapStateToProps, null)(AthleteDetails);