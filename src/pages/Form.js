import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactTooltip from 'react-tooltip';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '530px',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <h1>Register</h1>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        data-tip data-for="React-tooltip"
      />
      <ReactTooltip type="warning" place="top" effect="float" aria-haspopup='true'>Email address must contain @ to be valid</ReactTooltip>
      <TextField
        label="Password"
        variant="filled"
        type="password"
        pattern=".{8,}"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
        data-tip="React-tooltip"
      />
      <ReactTooltip place="top" type="warning" effect="float" aria-haspopup="true">Password must contain at least 8 characters</ReactTooltip>
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Link to = "/Successful">
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default Form;