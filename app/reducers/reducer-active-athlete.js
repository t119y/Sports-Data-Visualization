export default function(state = {}, action){
    switch(action.type){
        case "ATHLETE_SELECTED":
            return action.payload;
    }
    return state;
}