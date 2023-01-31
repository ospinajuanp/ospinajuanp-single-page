import { useState } from "react";

const initialState = {
    nameState:[],
}

const useInicialState = () => {
    const [state, setState] = useState(initialState)

    const addToNameState = (payload) => {
            setState({
                ...state,
                nameState:[
                    ...state.nameState,
                    payload
                ]
            })
    }
    return {
        state,
        addToNameState
    }
}

export default useInicialState;