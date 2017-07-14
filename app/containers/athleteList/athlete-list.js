import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectAthlete} from '../../actions/index';
require('./athlete-list.scss');

class AthleteList extends Component{
    creatListItem(){
        return this.props.athletes
        .filter((athlete)=>{
            var name = athlete.first + athlete.last;
            return name.toLowerCase().indexOf(this.props.filtertext.toLowerCase()) >= 0;
        })
        .map((athlete)=>{
            return (
            <li className = "athleteList" key={athlete.id} onClick={()=>this.props.selectAthlete(athlete)}>{athlete.first} {athlete.last}</li>
            )
        })
    }
    render(){  
        console.log(this.props.filtertext);
        return (
            <ul className = "athleteList_wrapper">
                {this.creatListItem()}
            </ul>    
        );
    }
}
function mapStateToProps(state){
    return {
        athletes: state.athletes,
        filtertext: state.filteredText
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectAthlete: selectAthlete}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(AthleteList);