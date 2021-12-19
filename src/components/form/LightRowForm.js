import React, { PropTypes } from 'react';

const LightRowForm = ({ lightRows, setLightRows }) => {
	const onChangeHandler = (e) => {
		e.preventDefault();
		console.log(e);

		setLightRows(e.target.value);
	}
    return (
    	<div>
    	<h3>Number of Rows of Lights</h3>
        <input type="range" max="7" value={lightRows} onChange={onChangeHandler} class="range" /> 
        <div className="inline ml-2 border p-1">{lightRows}</div>
        </div>
    );
};


export default LightRowForm;
