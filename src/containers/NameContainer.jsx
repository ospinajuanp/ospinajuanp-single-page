import React from 'react';
import ComponentName from '../components/ComponentName'
import useCrudNameAction from '../hooks/useCrudNameAction'

const API = '';

const NameContainer = () => {

    const results = useCrudNameAction(API)

    return (
        <div>
            { results.map( result => (
            <ProductItem result={result} key={result.id}/>
        ))}
        </div>
    );
};

export default NameContainer;