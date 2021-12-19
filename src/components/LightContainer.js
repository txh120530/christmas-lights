import React, { PropTypes } from 'react';


import LightRow from './LightRow.js'

const LightContainer = ({ lightIntensity, lightSize, lightRows, lightCount, lightColors, lightTime, lightToggle }) => {
    var lightRowsRender = [];

	for (var i = 0; i < lightRows; i++) {
	    lightRowsRender.push(<LightRow lightCount={lightCount} lightIntensity={lightIntensity} lightSize={lightSize} lightColors={lightColors} lightTime={lightTime} lightToggle={lightToggle} />);
	}	
	return lightRowsRender;
	
};


export default LightContainer;
