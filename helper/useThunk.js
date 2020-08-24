import { useReducer } from "react";


const useThunk = (reducer, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    let customDispatch = (action) => {
        if (typeof action === 'function') {
            action(customDispatch);
        } else {
            dispatch(action);
        }
    }

    return [state, customDispatch];
}

export default useThunk;