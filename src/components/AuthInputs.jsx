import { useState } from 'react';
import classes from './AuthInputs.module.css';
import { styled } from 'styled-components';
import Button from './Button';
import Input from './CustomInput';

const ControlContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id={classes['auth-inputs']}>
      <ControlContainer>
        <Input
          type="email"
          label="Email"
          $invalid={emailNotValid}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <Input
          type="password"
          label="Password"
          $invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
        />
      </ControlContainer>
      <div className={classes.actions}>
        <button type="button" className={classes["text-button"]}>
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
