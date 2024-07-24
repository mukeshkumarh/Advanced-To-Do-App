import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTask, setPriority } from '../features/task/taskSlice';
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Select,
  MenuItem,
  makeStyles,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  taskItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
  },
  prioritySelect: {
    marginRight: theme.spacing(2),
  },
}));

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handlePriorityChange = (task, priority) => {
    dispatch(setPriority({ id: task.id, priority }));
  };

  return (
    <Paper>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} className={classes.taskItem}>
            <Checkbox
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
            />
            <ListItemText primary={task.text} />
            <Select
              value={task.priority}
              onChange={(e) => handlePriorityChange(task, e.target.value)}
              className={classes.prioritySelect}
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
            <IconButton edge="end" onClick={() => dispatch(removeTask(task.id))}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TaskList;
