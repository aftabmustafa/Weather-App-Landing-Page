import classes from './index.module.css';

import Amsterdam from '../../assets/WeatherForecast/places/amsterdam.jpg';
import London from '../../assets/WeatherForecast/places/london.jpg';
import Budapest from '../../assets/WeatherForecast/places/budapest.jpg';
import Paris from '../../assets/WeatherForecast/places/paris.jpg';
import Chicago from '../../assets/WeatherForecast/places/chicago.jpg';
import SunIcon from '../../assets/WeatherForecast/icon/sun.png';

function DiffLocationForecast() {
  return (
    <div className={classes.diffLocationParent}>
      <h2>Weather Forecast</h2>
      <div className={classes.diffLocationCards}>
        <div className={classes.diffLocationCard}>
          <div className={classes.diffLocationCardItem}>
            <img src={Amsterdam} alt='amsterdam' />
            <div className={classes.diffLocationCornerStats}>
              <p>12:31</p>
              <span>
                <img src={SunIcon} alt='sun-icon' />
              </span>
            </div>
          </div>
          <p>Amsterdam</p>
        </div>
        <div className={classes.diffLocationCard}>
          <div className={classes.diffLocationCardItem}>
            <img src={London} alt='amsterdam' />
            <div className={classes.diffLocationCornerStats}>
              <p>12:31</p>
              <span>
                <img src={SunIcon} alt='sun-icon' />
              </span>
            </div>
          </div>
          <p>London</p>
        </div>
        <div className={classes.diffLocationCard}>
          <div className={classes.diffLocationCardItem}>
            <img src={Budapest} alt='amsterdam' />
            <div className={classes.diffLocationCornerStats}>
              <p>12:31</p>
              <span>
                <img src={SunIcon} alt='sun-icon' />
              </span>
            </div>
          </div>
          <p>Budapest</p>
        </div>
        <div className={classes.diffLocationCard}>
          <div className={classes.diffLocationCardItem}>
            <img src={Paris} alt='amsterdam' />
            <div className={classes.diffLocationCornerStats}>
              <p>12:31</p>
              <span>
                <img src={SunIcon} alt='sun-icon' />
              </span>
            </div>
          </div>
          <p>Paris</p>
        </div>
        <div className={classes.diffLocationCard}>
          <div className={classes.diffLocationCardItem}>
            <img src={Chicago} alt='amsterdam' />
            <div className={classes.diffLocationCornerStats}>
              <p>12:31</p>
              <span>
                <img src={SunIcon} alt='sun-icon' />
              </span>
            </div>
          </div>
          <p>Chicago</p>
        </div>
        <div className={classes.diffLocationCard}>
          <div className={classes.diffLocationCardItem}>
            <img src={Amsterdam} alt='amsterdam' />
            <div className={classes.diffLocationCornerStats}>
              <p>12:31</p>
              <span>
                <img src={SunIcon} alt='sun-icon' />
              </span>
            </div>
          </div>
          <p>Amsterdam</p>
        </div>
      </div>
    </div>
  );
}

export default DiffLocationForecast;
