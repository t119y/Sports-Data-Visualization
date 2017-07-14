import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {filterAthlete} from '../../actions/index'; 
require('./filter-bar.scss');
class FilterBar extends Component {
    render() {
        return (
            <div className="filterBar">
                 <input type="text" placeholder="Search for ..."  onKeyUp={(e)=>this.props.filterAthlete(e.target.value)}/>
            </div>
        );
    }
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({filterAthlete: filterAthlete}, dispatch);
}
export default connect(null, matchDispatchToProps)(FilterBar);