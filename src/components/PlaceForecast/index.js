import classes from './index.module.css';

import cloud from '../../assets/PlaceForecast/cloud.png';
import rightArrow from '../../assets/PlaceForecast/right-arrow.png';
import rightDoubleArrow from '../../assets/PlaceForecast/right-double-arrow.png';

function PlaceForecast() {
  return (
    <>
      <section className={`${classes.placeName} ${classes.position}`}>
        <h4>London</h4>
        <div className={classes.moreDetails}>
          <p>Details more</p>
          <img src={rightArrow} alt='right-arrow' />
        </div>
      </section>
      <div className={classes.position}>
        <div className={classes.forecastContainer}>
          <div className={classes.forecastCard}>
            <section className={classes.dailyForecast}>
              <div className={classes.dailyForecastCard}>
                <img src={cloud} alt='cloud-icon' />
                <p>-5/+4</p>
                <p>11 Mon</p>
              </div>
            </section>
            <section className={classes.dailyForecast}>
              <div className={classes.dailyForecastCard}>
                <img src={cloud} alt='cloud-icon' />
                <p>-5/+4</p>
                <p>11 Mon</p>
              </div>
            </section>
            <section className={classes.dailyForecast}>
              <div className={classes.dailyForecastCard}>
                <img src={cloud} alt='cloud-icon' />
                <p>-5/+4</p>
                <p>11 Mon</p>
              </div>
            </section>
            <section className={classes.dailyForecast}>
              <div className={classes.dailyForecastCard}>
                <img src={cloud} alt='cloud-icon' />
                <p>-5/+4</p>
                <p>11 Mon</p>
              </div>
            </section>
            <section className={classes.dailyForecast}>
              <div className={classes.dailyForecastCard}>
                <img src={cloud} alt='cloud-icon' />
                <p>-5/+4</p>
                <p>11 Mon</p>
              </div>
            </section>
            <section className={classes.dailyForecast}>
              <div className={classes.dailyForecastCard}>
                <img src={cloud} alt='cloud-icon' />
                <p>-5/+4</p>
                <p>11 Mon</p>
              </div>
            </section>
            <section className={classes.dailyForecast}>
              <div className={classes.dailyForecastCard}>
                <img src={cloud} alt='cloud-icon' />
                <p>-5/+4</p>
                <p>11 Mon</p>
              </div>
            </section>
            <section className={classes.dailyForecast}>
              <div className={classes.dailyForecastCard}>
                <img src={cloud} alt='cloud-icon' />
                <p>-5/+4</p>
                <p>11 Mon</p>
              </div>
            </section>
            <section className={classes.dailyForecast}>
              <div className={classes.dailyForecastCard}>
                <img src={cloud} alt='cloud-icon' />
                <p>-5/+4</p>
                <p>11 Mon</p>
              </div>
            </section>
            <section className={classes.dailyForecast}>
              <div className={classes.dailyForecastCard}>
                <img src={cloud} alt='cloud-icon' />
                <p>-5/+4</p>
                <p>11 Mon</p>
              </div>
            </section>
          </div>
          <button>
            <img src={rightDoubleArrow} alt='right-double-arrow' />
          </button>
        </div>
      </div>
    </>
  );
}

export default PlaceForecast;
