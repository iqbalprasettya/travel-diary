import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './style.module.scss';

import encryptPayload from '@utils/encryptPayload';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from './actions';


const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const onChangeHandler = (value, type) => {
    setUser({
      ...user,
      [type]: value,
    });
  };

  const onSubmit = () => {
    const dataUser = {
      email: encryptPayload(user.email),
      password: encryptPayload(user.password),
    };
    dispatch(
      login(
        dataUser,
        () => {
          console.log('Callback success');
        },
        (error) => {
          console.log(error);
        }
      )
    );
    navigate('/');
  };

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
                <input type="email" onChange={(e) => onChangeHandler(e.target.value, 'email')} />
              </div>
              <div className={classes['input-item']}>
                <label>Password</label>
                <input type="password" onChange={(e) => onChangeHandler(e.target.value, 'password')} />
              </div>
            </div>
            {/* <div className={classes['btn-submit']}> */}
            <button type="submit" onClick={() => onSubmit()}>
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
