import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './style.module.scss';

const index = () => {
  return (
    <>
      <div className={classes['container']}>
        <div className={classes['card']}>
          <div className={classes['card-item']}>
            <div className={classes['card-head']}>
              <h2>
                <FormattedMessage id="app_login_header_label" />
              </h2>
            </div>
            <div className={classes['input-form']}>
              <div className={classes['input-item']}>
                <label>Email</label>
                <input type="email" />
              </div>
              <div className={classes['input-item']}>
                <label>Password</label>
                <input type="password" />
              </div>
            </div>
            {/* <div className={classes['btn-submit']}> */}
            <button type="submit">
              <FormattedMessage id="app_login_header_label" />
            </button>
            {/* </div> */}
            <div className={classes['regis']}>
              <p>
                <FormattedMessage id="app_login_regis_label" />
                <a href="/register">
                  <FormattedMessage id="app_login_regis_label_link" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
