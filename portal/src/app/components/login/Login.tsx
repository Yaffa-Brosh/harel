import { useEffect, useState } from 'react';

import {
  LabelAndInputWrapper,
  ContentWrapper,
  Inputs,
  Title,
  SaveBtn,
} from '../editUser/EditUser.style';
import { useRouteActions } from 'app/common/routeActions';
import { checkUser } from 'app/routeActions/apis/usersActions';
import { DesignInput } from 'app/common/stayles/commonStyles.style';

export function Login() {
  const { pushHistory } = useRouteActions();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isValidEmail, setIsValidEmail] = useState() as any;
  const [isValidPassword, setIsValidPassword] = useState() as any;
  const [errorMessage, setErrorMessage] = useState() as any;

  useEffect(() => {}, []);

  const onChangeEmail = e => {
    const value = e.target.value;
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      setEmail(value);
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const onChangePassword = e => {
    const value = e.target.value;
    if (
      value.match(/[a-z]/g) &&
      value.match(/[A-Z]/g) &&
      value.match(/[0-9]/g)
    ) {
      setPassword(value);
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  };

  const onUserSubmit = async () => {
    const userExist = await checkUser(email);
    if (email && password) {
      if (userExist) {
        pushHistory('/home');
      } else {
        setErrorMessage('User does not exist');
      }
    } else {
      setErrorMessage('You must enter email and password');
    }
  };

  return (
    <>
      <Title>Login</Title>
      <ContentWrapper>
        <Inputs>
          <LabelAndInputWrapper>
            <label>First Name</label>
            <DesignInput></DesignInput>
          </LabelAndInputWrapper>
          <LabelAndInputWrapper>
            <label>Last Name</label>
            <DesignInput></DesignInput>
          </LabelAndInputWrapper>
          <LabelAndInputWrapper>
            <label>Email</label>
            <DesignInput
              style={{ color: isValidEmail ? 'black' : 'red' }}
              type="email"
              onChange={e => onChangeEmail(e)}
            ></DesignInput>
          </LabelAndInputWrapper>
          <LabelAndInputWrapper>
            <label>Password</label>
            <DesignInput
              style={{ color: isValidPassword ? 'black' : 'red' }}
              type="password"
              onChange={e => onChangePassword(e)}
            ></DesignInput>
          </LabelAndInputWrapper>
        </Inputs>
        <SaveBtn onClick={onUserSubmit}>login</SaveBtn>
        {errorMessage && <p>{errorMessage}</p>}
      </ContentWrapper>
    </>
  );
}
