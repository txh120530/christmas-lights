import React, { PropTypes } from 'react';

const LightRowForm = ({ lightTime, setLightTime }) => {
	const onChangeHandler = (e) => {
		e.preventDefault();
		console.log(e);

		setLightTime(e.target.value);
	}
    return (
    	<div>
    	<h3>Speed of Lights(Higher is Slower)</h3>
        <input type="range" min="1" max="10" value={lightTime} onChange={onChangeHandler} class="range" /> 
        <div className="inline ml-2 border p-1">{lightTime}</div>
        </div>
    );
};


export default LightRowForm;
