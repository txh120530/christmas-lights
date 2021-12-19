import React, { PropTypes } from 'react';

import LightIntensityForm from './form/LightIntensityForm.js';
import LightRowForm from './form/LightRowForm.js';
import LightCountForm from './form/LightCountForm.js';
import LightSpeedForm from './form/LightSpeedForm.js';
import LightToggleButton from './form/LightToggleButton.js';
import LightSizeForm from './form/LightSizeForm.js';
import LightColorForm from './form/LightColorForm';



const ChristmasForm = ({ lightCount, setLightCount, lightRows,setLightRows,lightIntensity,setLightIntensity,lightSize,setLightSize,lightTime,setLightTime, lightToggle, setLightToggle, lightColors, setLightColors }) => {
    return (
      <div className="form p-4 shadow-md mb-12">
        <h2 className="text-center font-bold uppercase text-5xl">Christmas Light Generator</h2>

      	<div className="block lg:flex justify-between items-center mx-auto my-4 px-4 max-w-5xl text-center">
        <LightIntensityForm lightIntensity={lightIntensity} setLightIntensity={setLightIntensity} />
        <LightSizeForm lightSize={lightSize} setLightSize={setLightSize} />
        <LightSpeedForm lightTime={lightTime} setLightTime={setLightTime} />
        <LightCountForm lightCount={lightCount} setLightCount={setLightCount} />
        <LightRowForm lightRows={lightRows} setLightRows={setLightRows} />
        </div>

        <hr />

        <div className="max-w-5xl mx-auto my-12">
        <LightColorForm lightColors={lightColors} setLightColors={setLightColors}/>
        </div>

        <LightToggleButton lightToggle={lightToggle} setLightToggle={setLightToggle} />
        
      </div>
    );
};


export default ChristmasForm;
