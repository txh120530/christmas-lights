import React, { PropTypes } from 'react';
import styled, { css, keyframes } from 'styled-components'


import styles from './LightBulb.module.css';


	const glow = (color, intensity) => keyframes`
	  0%,
	  100% {
	    box-shadow: 0 0 ${intensity}0px 5px ${color};
	  }
	  50% {
	    box-shadow: none;
	  }
	`;


// Todo add dynamic size and intensity from size and intensity props
	const Bulb = styled.div`
		display: block;
		border-radius: 50%;
		width: ${props => (props.size/2)*5}px; 
		height: ${props => props.size*5}px;
		background-color: ${props => props.color};
		${props => (props.lightToggle === true ? css`animation:${glow(props.color, props.intensity)} ${props.speed}00ms infinite` : '')};


	`;


const LightBulb = ({ color, speed, lightIntensity, lightSize, lightToggle }) => {
	
    return (
	  <Bulb color={color} speed={speed} size={lightSize} intensity={lightIntensity} lightToggle={lightToggle} />
    );
};


export default LightBulb;
