import classes from './index.module.css';

import Logo from '../../assets/LeftNavigation/logo.png';
import Dashboard from '../../assets/LeftNavigation/dashboard.png';
import Statistics from '../../assets/LeftNavigation/statistics.png';
import MapIcon from '../../assets/LeftNavigation/mapIcon.png';
import Calendar from '../../assets/LeftNavigation/calendar.png';
import Setting from '../../assets/LeftNavigation/setting.png';
import Cloud from '../../assets/LeftNavigation/cloud-moon.png';

function LeftNavigation() {
  return (
    <div className={classes.leftNavBg}>
      <div className='top-navigation'>
        <div className={classes.brandLogoText}>
          <img src={Logo} alt='logo' />
          <h2>METEOROLOG</h2>
        </div>
        <nav>
          <ul>
            <li>
              <img
                src={Dashboard}
                alt='dashboard'
                className={classes.dashboardIcon}
              />
              <p>Dashboard</p>
            </li>
            <li>
              <img src={Statistics} alt='statistics' />
              <p>Statistics</p>
            </li>
            <li>
              <img src={MapIcon} alt='map' />
              <p>Map</p>
            </li>
            <li>
              <img src={Calendar} alt='calendar' />
              <p>Calendar</p>
            </li>
            <li>
              <img src={Setting} alt='setting' />
              <p>Setting</p>
            </li>
          </ul>
        </nav>
      </div>
      <div className={classes.currentWeatherCard}>
        <div className={classes.currentTopContainer}>
          <img src={Cloud} alt='cloud-moon-icon' />
          <div>
            <p>Today</p>
            <p>11:44</p>
            <p>Mon, 11 January</p>
          </div>
        </div>
        <div className={classes.currentMiddleContainer}>
          <h1>
            +4<sup>0</sup>C
          </h1>
          <h1>New York</h1>
          <p>United States</p>
        </div>
        <div className={classes.currentBottomContainer}>
          <div>
            <p>Humidity:</p>
            <p>70%</p>
          </div>
          <div className={classes.container}>
            <div className={`${classes.progressBar} ${classes.humidity}`}></div>
          </div>
          <div>
            <p>Precipitation:</p>
            <p>25%</p>
          </div>
          <div className={classes.container}>
            <div
              className={`${classes.progressBar} ${classes.precipitation}`}
            ></div>
          </div>
          <div>
            <p>Wind:</p>
            <p>4.5km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftNavigation;
