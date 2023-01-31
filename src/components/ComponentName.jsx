import React, { useContext } from 'react';
import AppContexts from '../context/AppContext'

const ComponentName = ({ result }) => {

    const { addToNameState } = useContext(AppContexts);

	const handleClick = (resultItem) => {
		addToNameState(resultItem)
	}

    return (
        <div>
            <img src={result.img[0]} alt={result.title} />
            <button onClick={ () => handleClick(result)}></button>
        </div>
    );
};

export default ComponentName;