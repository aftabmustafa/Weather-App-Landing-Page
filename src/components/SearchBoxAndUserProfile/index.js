import classes from './index.module.css';

import Search from '../../assets/Header/search.png';
import BellIcon from '../../assets/Header/bell-icon.png';
import UserImg from '../../assets/Header/actor.jpg';
import DownArrow from '../../assets/Header/down-arrow.png';

function SearchBoxAndUserProfile() {
  return (
    <header>
      <div className={classes.searchBoxAndUserProfile}>
        <section>
          <div className={classes.searchBox}>
            <button className={classes.searchBoxIcon}>
              <img src={Search} alt='search-icon' />
            </button>
            <input type='text' placeholder='Search' />
          </div>
        </section>
        <div className={classes.userProfile}>
          <img src={BellIcon} alt='bell-icon' className={classes.bellIcon} />
          <div className={classes.vl}></div>
          <img src={UserImg} alt='actor-icon' className={classes.userImg} />
          <p>Average Jignesh</p>
          <img src={DownArrow} alt='down-arrow' className={classes.downArrow} />
        </div>
      </div>
    </header>
  );
}

export default SearchBoxAndUserProfile;
