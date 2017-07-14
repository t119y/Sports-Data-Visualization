export const selectAthlete = (athlete) => {
    console.log("you clicked a athlete", athlete.first);
    return {
        type: "ATHLETE_SELECTED",
        payload: athlete
    }
}

export const filterInfo = (text) => {
    console.log("In action", text);
    return {
        type: "Info_FILTERED",
        payload: text
    }
}
