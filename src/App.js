import {useState, useEffect} from 'react';

import ChristmasForm from './components/ChristmasForm.js';
import LightContainer from './components/LightContainer.js'

function App() {
  
const getRand = () => {
 var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


  const initialColors = [getRand(), getRand(), getRand()]
  const [lightColors, setLightColors] = useState(initialColors)
  const [lightIntensity, setLightIntensity] = useState(5);
  const [lightRows, setLightRows] = useState(3);
  const [lightCount, setLightCount] = useState(10);
  const [lightSize, setLightSize] = useState(5);
  const [lightToggle, setLightToggle] = useState(true);
  const [lightTime, setLightTime] = useState(3);

  return (

    <div>

     <LightContainer 
        lightRows={lightRows}
        lightCount={lightCount}
        lightIntensity={lightIntensity}
        lightSize={lightSize}
        lightColors={lightColors} 
        lightTime={lightTime}
        lightToggle={lightToggle}
      />


      <ChristmasForm 
      lightRows={lightRows}
      setLightRows={setLightRows}
      lightCount={lightCount}
      setLightCount={setLightCount}
      lightIntensity={lightIntensity}
      setLightIntensity={setLightIntensity}
      lightSize={lightSize}
      setLightSize={setLightSize}
      lightTime={lightTime}
      setLightTime={setLightTime}
      lightToggle={lightToggle}
      setLightToggle={setLightToggle}
      lightColors={lightColors}
      setLightColors={setLightColors}
      />
      

     

    </div>
  );
}

export default App;
