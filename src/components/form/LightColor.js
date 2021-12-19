import React, { useState, useEffect } from 'react';
import { HexColorPicker } from "react-colorful";




const LightColor = ({ index, color, lightColors, setLightColors }) => {
	const [indColor, setIndColor] = useState(color);

	useEffect(() => {
		let newColors = lightColors.slice();
		newColors[index] = indColor;
		setLightColors(newColors);
  }, [indColor]);

	const handleDelete = () =>{
		let newColors = lightColors.slice();
	    newColors.splice(index, 1);
		setLightColors(newColors);
	}



    return (
    	<div>
    		<button className="p-1 rounded bg-gray-700 mx-auto my-3 ml-0 table" onClick={handleDelete}>Delete</button>
    	     <div className="small"><HexColorPicker color={indColor} onChange={setIndColor} /></div>
    	</div>
    );
};

LightColor.displayName = 'LightColor';

export default LightColor;
