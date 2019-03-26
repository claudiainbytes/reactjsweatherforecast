import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import LocationImg from './LocationImg';
import WeatherData from './WeatherData';


class WeatherLocation extends Component {

    render(){

        const {location} = this.props;
        
        return(
            <div className="card"> 
            <LocationImg location={location}></LocationImg>
                <div className="card-body">
                    <h5 className="card-title"><Location city={location.city}></Location></h5>
                    <WeatherData location={location}></WeatherData>
                </div>        
            </div>
        );
    }
};

WeatherLocation.propTypes = {
    location: PropTypes.object.isRequired
}; 

export default WeatherLocation;