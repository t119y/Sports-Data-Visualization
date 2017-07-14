import React, { Component } from 'react';
// import AthleteList from '../containers/athleteList/athlete-list';
// import AthleteDetails from '../containers/athleteDetails/athlete-details';
// import FilterBar from '../containers/filterBar/filter-bar';
import NbaTeams from '../containers/nbaTeams/nba-teams';

require('../../scss/style.scss');

class App extends Component {

    render() {

        // const curry = NBA.stats.playerInfo({"PlayerID": "201939", "SeasonType":"Regular Season", "LeagueID":"00"}).then((result)=> {console.log(result)});
        // const curry = NBA.stats.playerInfo({"PlayerID": "201939", "SeasonType":"Regular Season", "LeagueID":"00"}).then((result)=> {console.log(result)});

        return (
            // <div>
            //     <FilterBar />
            //     <h2> Athlete List: </h2>
                
            //     <AthleteList />
                
            //     <hr/>
            //     <h2>Athlete Details: </h2>
            //     <AthleteDetails />
            // </div>  
            <div>
                <NbaTeams />
            </div>
        );
    }
}

export default App;