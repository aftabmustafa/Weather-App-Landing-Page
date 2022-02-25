import { Fragment } from 'react';

import SearchBoxAndUserProfile from './components/SearchBoxAndUserProfile';
import DiffLocationForecast from './components/DiffLocationForecast';
import LeftNavigation from './components/LeftNavigation';
import PlaceForecast from './components/PlaceForecast';

import './App.css';

function App() {
  return (
    <Fragment>
      {/* <SearchBoxAndUserProfile /> */}
      {/* <DiffLocationForecast /> */}
      <PlaceForecast />
      {/* <LeftNavigation /> */}
    </Fragment>
  );
}

export default App;
