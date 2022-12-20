import { useDispatch } from 'react-redux';
import { setUsers } from '../../../store/usersSlice';
import { getAllUsers } from '../apis/usersActions';
const UsersHook = () => {
  const dispatch = useDispatch();
  const getUsersData = async () => {
    const usersData = await getAllUsers();
    dispatch(setUsers(usersData));
  };
  return { getUsersData };
};
export default UsersHook;
