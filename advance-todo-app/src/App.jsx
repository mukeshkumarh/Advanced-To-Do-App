import React from 'react';
import { useSelector } from 'react-redux';
import { Container, AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import WeatherDisplay from './components/WeatherDisplay';
import Auth from './components/Auth';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  appBar: {
    marginBottom: theme.spacing(2),
  },
}));

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">Advanced To-Do App</Typography>
        </Toolbar>
      </AppBar>
      <Auth />
      {isAuthenticated && (
        <>
          <TaskInput />
          <TaskList />
          <WeatherDisplay />
        </>
      )}
    </Container>
  );
};

export default App;
