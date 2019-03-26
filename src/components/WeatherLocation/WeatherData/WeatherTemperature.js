import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import {ICONS} from './../../../constants/WeatherIcons';

const getWeatherIcon = weatherState => {
    const icon = ICONS[weatherState];
    const iconSize = "lg";
    
    if (icon)
        return <WeatherIcons name={icon} size={iconSize} />;
    else 
        return <WeatherIcons name={ICONS["SUNNY"]} size={iconSize} />;
};

const getToFahrenheit = temperature => (Math.round((temperature * 1.8) + 32));

const WeatherTemperature = ({weatherTemperature: {temperature, weatherState}}) => (
    <div>
        <p className="card-text">
            { getWeatherIcon(weatherState) } <span>{ weatherState }</span> 
            {` ${temperature}  C˚`}|{ ` `+ getToFahrenheit(temperature) +` F˚`}
        </p>
    </div>
);

WeatherTemperature.propTypes = {
    weatherTemperature: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired
    })
}; 

export default WeatherTemperature;