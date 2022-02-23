import classes from './index.module.css';

import amsterdam from '../../assets/WeatherForecast/places/amsterdam.jpg';
import budapest from '../../assets/WeatherForecast/places/budapest.jpg';
import chicago from '../../assets/WeatherForecast/places/chicago.jpg';
import london from '../../assets/WeatherForecast/places/london.jpg';
import paris from '../../assets/WeatherForecast/places/paris.jpg';
import sunIcon from '../../assets/WeatherForecast/icon/sun.png';

function WeatherForecast() {
  return (
    <div className={classes.parentContainer}>
      <h2>Weather Forecast</h2>
      <div className={classes.flexContainer}>
        <div className={classes.weatherCard}>
          <div className={classes.placeCard}>
            <img src={amsterdam} alt='amsterdam' />
            <div className={classes.cornerStats}>
              <p>12:31</p>
              <span>
                <img src={sunIcon} alt='sun-icon' />
              </span>
            </div>
          </div>
          <p>Amsterdam</p>
        </div>
        <div className={classes.weatherCard}>
          <div className={classes.placeCard}>
            <img src={london} alt='london' />
            <div className={classes.cornerStats}>
              <p>12:31</p>
              <span>
                <img src={sunIcon} alt='sunIcon' />
              </span>
            </div>
          </div>
          <p>London</p>
        </div>
        <div className={classes.weatherCard}>
          <div className={classes.placeCard}>
            <img src={budapest} alt='budapest' />
            <div className={classes.cornerStats}>
              <p>12:31</p>
              <span>
                <img src={sunIcon} alt='sun-icon' />
              </span>
            </div>
          </div>
          <p>Budapest</p>
        </div>
        <div className={classes.weatherCard}>
          <div className={classes.placeCard}>
            <img src={paris} alt='paris' />
            <div className={classes.cornerStats}>
              <p>12:31</p>
              <span>
                <img src={sunIcon} alt='sun-icon' />
              </span>
            </div>
          </div>
          <p>Paris</p>
        </div>
        <div className={classes.weatherCard}>
          <div className={classes.placeCard}>
            <img src={chicago} alt='chicago' />
            <div className={classes.cornerStats}>
              <p>12:31</p>
              <span>
                <img src={sunIcon} alt='sun-icon' />
              </span>
            </div>
          </div>
          <p>Chicago</p>
        </div>
        <div className={classes.weatherCard}>
          <div className={classes.placeCard}>
            <img src={amsterdam} alt='amsterdam' />
            <div className={classes.cornerStats}>
              <p>12:31</p>
              <span>
                <img src={sunIcon} alt='sun-icon' />
              </span>
            </div>
          </div>
          <p>Amsterdam</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
