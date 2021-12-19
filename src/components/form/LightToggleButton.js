import React, { PropTypes } from 'react';

const LightToggleButton = ({ lightToggle, setLightToggle }) => {
	const onClickHandler = () =>{
		setLightToggle(!lightToggle);
	}


    return (
        <button className="p-3 rounded bg-gray-700 mx-auto my-3 table" onClick={onClickHandler} >{lightToggle === true ? "Turn off Lights" : "Turn on Lights"}</button>
    );
};


export default LightToggleButton;
