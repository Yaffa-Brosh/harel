import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onUpdate, getUserById } from 'app/routeActions/apis/usersActions';
import { getUser, setUser, setUserField } from 'store/userSlice';
import {
  LabelAndInputWrapper,
  ContentWrapper,
  Inputs,
  EditInput,
  Title,
  SaveBtn,
  DesignDatePicker,
  BackBtn,
} from './EditUser.style';
import { useRouteActions } from 'app/common/routeActions';
import moment from 'moment';

export function EditUser() {
  const currentUser = useSelector(getUser);
  const dispatch = useDispatch();
  const { pushHistory, getHistory } = useRouteActions();
  const history: any = getHistory();

  useEffect(() => {
    setUserData();
  }, []);

  const setUserData = async () => {
    const userId = history?.location?.state?.id;
    const user = await getUserById(userId);
    dispatch(setUser(user));
  };

  const onChange = (e, field) => {
    const value =
      e?.target?.value || moment(e?._d, 'DD/MM//YYYY');
    dispatch(setUserField({ field, value }));
  };

  const onUserSave = () => {
    const userWithOutId = { ...currentUser };
    delete userWithOutId._id;
    onUpdate(userWithOutId, currentUser._id);
  };

  return (
    <>
      <Title>Details</Title>
      <ContentWrapper>
        <Inputs>
          <LabelAndInputWrapper>
            <label>First Name</label>
            <EditInput
              onChange={e => onChange(e, 'firstName')}
              value={currentUser['firstName']}
            ></EditInput>
          </LabelAndInputWrapper>
          <LabelAndInputWrapper>
            <label>Last Name</label>
            <EditInput
              onChange={e => onChange(e, 'lastName')}
              value={currentUser['lastName']}
            ></EditInput>
          </LabelAndInputWrapper>
          <LabelAndInputWrapper>
            <label>Date</label>
            <DesignDatePicker
              allowClear={false}
              onChange={e => onChange(e, 'date')}
              value={moment(currentUser['date'])}
            ></DesignDatePicker>
          </LabelAndInputWrapper>
          <LabelAndInputWrapper>
            <label>Phone</label>
            <EditInput
              onChange={e => onChange(e, 'phone')}
              value={currentUser['phone']}
            ></EditInput>
          </LabelAndInputWrapper>
        </Inputs>
        <SaveBtn onClick={onUserSave}>Save</SaveBtn>
        <BackBtn onClick={() => pushHistory('/home')}>Back</BackBtn>
      </ContentWrapper>
    </>
  );
}
