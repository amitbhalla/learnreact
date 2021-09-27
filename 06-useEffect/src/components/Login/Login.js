import React, { useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


const reducer = (state, action) => {
  if (action.type === "EMAIL") {
    const obj = {
      ...state,
      email: action.val,
      emailValid: action.val.includes("@"),
    };
    obj.formValid = (obj.email.includes("@") && obj.pass.trim().length > 7)
    return obj;
  }
  if (action.type === "PASS") {
    const obj = {
      ...state,
      pass: action.val.trim(),
      passValid: action.val.trim().length > 7
    };
    obj.formValid = (obj.email.includes("@") && obj.pass.trim().length > 7)
    return obj;
  }
  return state;
}

const Login = (props) => {
  const [state, dispatch] = useReducer(reducer, { email: "", emailValid: true, pass: "", passValid: true, formValid: false });

  const emailChangeHandler = (event) => {
    dispatch({ type: "EMAIL", val: event.target.value })
  };

  const passwordChangeHandler = (event) => {
    dispatch({ type: "PASS", val: event.target.value })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(state.email, state.pass);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${state.emailValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={emailChangeHandler}
            onBlur={emailChangeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${state.passValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={state.pass}
            onChange={passwordChangeHandler}
            onBlur={passwordChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!state.formValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
