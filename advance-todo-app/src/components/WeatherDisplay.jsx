import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../features/api/apiSlice';
import { Card, CardContent, Typography, CircularProgress, makeStyles, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: theme.palette.error.main,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  textField: {
    marginRight: theme.spacing(2),
  },
}));

const WeatherDisplay = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.apiData);
  const [location, setLocation] = useState('London'); // Default location
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchWeather(location));
  }, [dispatch, location]);

  const handleFetchWeather = () => {
    dispatch(fetchWeather(location));
  };

  if (status === 'loading') return <CircularProgress className={classes.loading} />;
  if (status === 'failed') return <Typography className={classes.error}>{error}</Typography>;

  return (
    <>
      <div className={classes.inputContainer}>
        <TextField
          label="Location"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={classes.textField}
        />
        <Button variant="contained" color="primary" onClick={handleFetchWeather}>
          Get Weather
        </Button>
      </div>
      <Card className={classes.card}>
        {data && (
          <CardContent>
            <Typography variant="h6">Weather in {data.location.name}</Typography>
            <Typography>{data.current.condition.text}</Typography>
            <Typography>{data.current.temp_c}°C</Typography>
          </CardContent>
        )}
      </Card>
    </>
  );
};

export default WeatherDisplay;
