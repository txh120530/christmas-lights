import React, { PropTypes } from 'react';
import LightColor from './LightColor';

const LightColorForm = ({ lightColors, setLightColors }) => {
	let lightColorRender = [];
	const n = lightColors.length;

	for (var i = 0; i < n; i++) {

		let index = i;
	    lightColorRender.push(<LightColor key={index} index={index} lightColors={lightColors} color={lightColors[i]} setLightColors={setLightColors} />);
		
	}

	const getRand = () => {
 var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


	const onClickHandler = () => {
		let newColors = lightColors.slice();
	    newColors.push(getRand());
		setLightColors(newColors);
	}

    return (
    	<>
    	        <button className="p-3 rounded bg-gray-700 mx-auto my-3 table" onClick={onClickHandler} >Add New Color</button>
    	<div className="flex justify-around items-end flex-wrap">
		{lightColorRender}  
		</div>
		</>     
    );
};

LightColorForm.displayName = 'LightColorForm';


export default LightColorForm;
