import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = ({location}) => {

    //const {temperature, weatherState} = location.weatherTemperature;
    const {humidity, wind} = location.weatherExtraInfo;
    
    return(<div> 
        <WeatherTemperature weatherTemperature={location.weatherTemperature}></WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>);
};

WeatherData.propTypes = {
    location: PropTypes.object.isRequired
};

export default WeatherData;