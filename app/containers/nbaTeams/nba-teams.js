import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FilterBar from '../filterBar/filter-bar';
require('./nba-teams.scss');

class NbaTeams extends Component {
    nbaTeamNames(){
        return this.props.nbaTeams.map((team)=>{
            console.log(team);
            return <div key={team.teamId}>{team.teamName}</div>;
        })
    };
    
    render() {
        return (
            <div>
                <FilterBar />
                <div className="nbaTeam_wrapper">
                    
                    {this.nbaTeamNames()}
                </div>  
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        nbaTeams: state.nbaTeams,
        filtertext: state.filteredText
    }
}

export default connect(mapStateToProps, null)(NbaTeams);