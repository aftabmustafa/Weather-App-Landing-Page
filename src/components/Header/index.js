import classes from './index.module.css';

import search from '../../assets/Header/search.png';
import bellIcon from '../../assets/Header/bell-icon.png';
import actor from '../../assets/Header/actor.jpg';
import downArrow from '../../assets/Header/down-arrow.png';

function Header() {
  return (
    <header>
      <div className={classes.searchBarAction}>
        <section>
          <div className={classes.searchComponent}>
            <div className={classes.searchIcon}>
              <img src={search} alt='search-icon' />
            </div>
            <p>Search</p>
          </div>
          <div className={classes.searchBar}>
            <hr />
          </div>
        </section>
        <div className={classes.actionCenter}>
          <img src={bellIcon} alt='bell-icon' className={classes.bellIcon} />
          <div className={classes.vl}></div>
          <img src={actor} alt='actor-icon' className={classes.userImg} />
          <p>Average Jignesh</p>
          <img src={downArrow} alt='down-arrow' className={classes.downArrow} />
        </div>
      </div>
    </header>
  );
}

export default Header;
