import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import classes from './style.module.scss';

import { selectLogin } from '@containers/Client/selectors';

import GridData from '../../components/GridData';

const Home = () => {
  // const dispatch = useDispatch();

  // const [isLogined, setIsLogined] = useState(false);
  // // Get data from store
  // const login = useSelector(selectLogin);

  // useEffect(() => {
  //   if (login) {
  //     setIsLogined(true);
  //   } else {
  //     setIsLogined(false);
  //   }
  // }, [login]);

  return (
    <>
      {/* <FormattedMessage id="app_greeting" /> */}
      <div className={classes['background-banner']}>
        <div className={classes['container']}>
          <h1>
            The Journey <br /> you ever dreamed of.
          </h1>
          <p>We made a tool so you can easily keep & share your travel memories. But there is a lot more</p>
        </div>
      </div>
      <section className={classes['journey']}>
        <div className={classes['container']}>
          <div className={classes['journey-header']}>
            <h2>Journey</h2>
          </div>
          <div className={classes['input-search']}>
            <input placeholder="Find Journey" type="text" name="" id="" />
            <button type="submit">Search</button>
          </div>
        </div>
        <GridData />
      </section>
    </>
  );
};

export default Home;
