import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        <p className="card-text">
            <span>{`Humidity: ${humidity}% `}</span>
            <br/>
            <span> {`Wind: ${wind}`}</span>
        </p>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}; 

export default WeatherExtraInfo;