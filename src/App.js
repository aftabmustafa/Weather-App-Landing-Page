import { Fragment } from 'react';

import Header from './components/Header';
import WeatherForecast from './components/WeatherForecast';
import LeftNavigation from './components/LeftNavigation';
// import PlaceForecast from './components/PlaceForecast';

import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <WeatherForecast />
      {/* <PlaceForecast /> */}
      <LeftNavigation />
    </Fragment>
  );
}

export default App;
