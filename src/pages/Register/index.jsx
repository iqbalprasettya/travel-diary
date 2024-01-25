import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import encryptPayload from '@utils/encryptPayload';

import { register } from './actions';

import classes from './style.module.scss';

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
      fullname: encryptPayload(user.fullname),
      email: encryptPayload(user.email),
      password: encryptPayload(user.password),
    };
    dispatch(
      register(
        dataUser,
        () => {
          console.log('Callback success');
        },
        (error) => {
          console.log(error);
        }
      )
    );
    // console.log(dataUser, "<<< OnSubmit")
    navigate('/login');
  };

  return (
    <>
      <div className={classes['container']}>
        <div className={classes['card']}>
          <div className={classes['card-item']}>
            <div className={classes['card-head']}>
              <h2>
                <FormattedMessage id="app_regis_header_label" />
              </h2>
            </div>
            <div className={classes['input-form']}>
              <div className={classes['input-item']}>
                <label>Full Name</label>
                <input type="text" onChange={(e) => onChangeHandler(e.target.value, 'fullname')} />
              </div>
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
              <FormattedMessage id="app_regis_header_label" />
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
