import React, { PropTypes } from 'react';

const LightIntensityForm = ({ lightIntensity, setLightIntensity }) => {

	const onChangeHandler = (e) => {
		e.preventDefault();
		console.log(e);

		setLightIntensity(e.target.value);
	}

    return (

    	<div>
    	<h3>Light Intensity</h3>
        <input type="range" max="10" value={lightIntensity} onChange={onChangeHandler} class="range" /> 
        <div className="inline ml-2 border p-1">{lightIntensity}</div>
        </div>

    );
};


export default LightIntensityForm;
