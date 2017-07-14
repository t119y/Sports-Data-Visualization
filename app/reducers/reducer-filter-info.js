export default function(state = "", action){
    switch(action.type){
        case "Info_FILTERED":
            console.log("In reducer", action.payload);
            return action.payload;
    }
    return state;
}