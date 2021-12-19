import React from 'react';

const LightSizeForm = ({ lightSize, setLightSize }) => {

	const onChangeHandler = (e) => {
		e.preventDefault();
		console.log(e);

		setLightSize(e.target.value);
	}

    return (
        <div>
    	<h3>Size of Lights</h3>
        <input type="range" min="1" max="10" value={lightSize} onChange={onChangeHandler} class="range" /> 
        <div className="inline ml-2 border p-1">{lightSize}</div>
        </div>
    );
};

export default LightSizeForm;
