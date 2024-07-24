import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/task/taskSlice';
import { TextField, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  textField: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
}));

const TaskInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now(), text, completed: false, priority: 'Medium' }));
    setText('');
  };

  return (
    <Paper>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Add a new task"
          variant="outlined"
          className={classes.textField}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
    </Paper>
  );
};

export default TaskInput;
