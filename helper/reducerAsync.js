

const reducerAsync = (state, action) => {
    if (action.type === "DIR_CHANGE") {
        state = action.payload;
    }
}