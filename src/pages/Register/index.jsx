import React from 'react';

import classes from './style.module.scss';

const index = () => {
  return (
    <>
      <div className={classes['container']}>
        <div className={classes['card']}>
          <div className={classes['card-item']}>
            <div className={classes['card-head']}>
              <h2>Register</h2>
            </div>
            <div className={classes['input-form']}>
              <div className={classes['input-item']}>
                <label>Full Name</label>
                <input type="text" />
              </div>
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
            <button type="submit">Register</button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
