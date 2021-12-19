import React from 'react';

import LightBulb from './LightBulb.js'

const LightRow = ({ lightCount, lightIntensity, lightSize, lightColors, lightTime, lightToggle }) => {
  
var lightBulbRender = [];


	


	const n = lightCount;
	for (var i = 0; i < n; i++) {

		let index = i;

		let lightSpeed = Number(lightTime) + index;
	    lightBulbRender.push(<LightBulb key={index} speed={lightSpeed} color={lightColors[index++%lightColors.length]} lightIntensity={lightIntensity} lightSize={lightSize} lightToggle={lightToggle} />);
		
	}
	return (
		<div className="flex justify-around my-3">
			{lightBulbRender}
		</div>
		);
	

};


export default LightRow;
