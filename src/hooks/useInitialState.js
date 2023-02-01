import { useState } from "react";

const initialState = {
    nameState:[] // variable name with state initialization
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

    // example
	const addToNameState = (payload) => {
		setState({
			...state,
			nameState: [...state.cart, payload]
		});
	};
	


	return {
		addToNameState
	}
}

export default useInitialState;