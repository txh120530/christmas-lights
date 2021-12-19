import React, { PropTypes } from 'react';

const LightCountForm = ({ lightCount, setLightCount }) => {
	const onChangeHandler = (e) => {
		e.preventDefault();
		console.log(e);

		setLightCount(e.target.value);
	}
    return (
    	<div>
    	<h3>Number of Lights on Each Row</h3>
        <input type="range" max="20" value={lightCount} onChange={onChangeHandler} class="range" /> 
        <div className="inline ml-2 border p-1">{lightCount}</div>
        </div>
    );
};


export default LightCountForm;
