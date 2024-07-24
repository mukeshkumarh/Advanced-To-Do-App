import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';
import { Button, Typography, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  authContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Auth = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleLogin = () => {
    dispatch(login({ username: 'user' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Paper className={classes.authContainer}>
      {isAuthenticated ? (
        <>
          <Typography variant="h6">Welcome, {user.username}</Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLogout}
            className={classes.button}
          >
            Logout
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          className={classes.button}
        >
          Login
        </Button>
      )}
    </Paper>
  );
};

export default Auth;
