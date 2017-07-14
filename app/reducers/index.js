import {combineReducers} from 'redux';
import AthleteReducer from './reducer-athlete';
import ActiveAthleteReducer from './reducer-active-athlete';
import FilterReducer from './reducer-filter-info';
import nbaTeamReducer from './reducer-nba-team';

const rootReducer = combineReducers({
    athletes: AthleteReducer,
    activeAthlete: ActiveAthleteReducer,
    filteredText: FilterReducer,
    nbaTeams: nbaTeamReducer
})

export default rootReducer;