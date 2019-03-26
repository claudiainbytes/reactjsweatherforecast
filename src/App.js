import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';
import {LOCATIONS_INFO, LOCATIONS_INFO_2} from './data/LocationsInfo';

const cities = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla','Cartagena','Bucaramanga'];
const cities_2 = ['Cúcuta', 'Manizales', 'Santa Marta', 'Pereira','Villavicencio','Tunja'];

const locations = LOCATIONS_INFO;
const otherLocations = LOCATIONS_INFO_2;

class App extends Component {

  constructor(){
    super();
    this.state = {
        btnOtherCitiesStatus: false,
        cities: cities,
        locations: locations
    };
    this.getOtherCities = this.getOtherCities.bind(this);
  }

  getOtherCities = () => {
    if(!this.state.btnOtherCitiesStatus){
      this.setState({
        cities: cities_2,
        locations: otherLocations,
        btnOtherCitiesStatus: true,
      });
    } else {
      this.setState({
        cities: cities,
        locations: locations,
        btnOtherCitiesStatus: false
      });
    }
  }

  getLocation = (city) => this.state.locations.find((location) =>  location.city === city );

  render() {

    const cities = this.state.cities;

    const text_btnGetOtherCities = this.state.btnOtherCitiesStatus ? 'Go back' : 'Other cities';

    let weatherLocationItems = cities.map((city, index) => { 
      let location = this.getLocation(city);
      return(<div className="col-md-4 mb-3" key={"location_" + index}>
        <WeatherLocation location={location}></WeatherLocation>
      </div>);
    });

    return (
        <div>
          <div className="row mt-2 mb-2">
            <div className="col-md-10">
              <h1>Colombia Weather Forecast</h1>
            </div>
            <div className="col-md-2 text-md-right my-auto">
              <button type="button" className="btn btn-primary" onClick={this.getOtherCities}>{text_btnGetOtherCities}</button>
            </div>  
          </div>
          <div className="row">
            {weatherLocationItems}     
          </div>
        </div>
    );

  }
}

export default App;
