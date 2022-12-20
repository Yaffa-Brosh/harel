import { ColumnsType } from 'antd/lib/table';
import { GenericTable } from '../table/GenericTable';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'store/usersSlice';
import { setUser } from 'store/userSlice';
import UsersHook from 'app/routeActions/hooks/UsersHook';
import {
  UsersWrapper,
  UsersHeaderWrapper,
  UsersTitleWrapper,
} from './Users.style';
import { useRouteActions } from 'app/common/routeActions';
import { EditInput, LabelAndInputWrapper } from '../editUser/EditUser.style';

export function Users() {
  const dispatch = useDispatch();
  const usersData = useSelector(getUsers);
  const [filteredUsers, setFilteredUsers] = useState(usersData);
  const [isFilterInputFull, setIsFilterInputFull] = useState(false);
  const { getUsersData } = UsersHook();
  const { pushHistory } = useRouteActions();

  useEffect(() => {
    getUsersData();
    setFilteredUsers(usersData);
  }, []);

  interface DataType {
    _id: string;
    firstName: string;
    lastName: string;
    date: Date;
    phone: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
      sortDirections: ['descend'],
      sorter: true,
    },
    {
      title: 'Name',
      dataIndex: 'firstName',
      key: 'firstName',
      sortDirections: ['descend'],
      sorter: true,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      sortDirections: ['descend'],
      sorter: true,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: date => <>{new Date(date).toLocaleDateString()}</>,
      sortDirections: ['descend'],
      sorter: true,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      sortDirections: ['descend'],
      sorter: true,
    },
  ];

  const openEditRowPage = row => {
    dispatch(setUser(row));
    const { _id } = row;
    pushHistory(`/editUser/${_id}`, { id: _id });
  };

  const onFilterChange = e => {
    const value = e.target.value;
    if (value) {
      setIsFilterInputFull(true);
    } else setIsFilterInputFull(false);
    const newFilteredUsers = usersData.filter(
      u =>
        u['_id'].includes(value) ||
        u['firstName'].includes(value) ||
        u['lastName'].includes(value) ||
        u['phone'].includes(value),
    );
    setFilteredUsers(newFilteredUsers);
  };

  return (
    <UsersWrapper>
      <UsersHeaderWrapper>
        <UsersTitleWrapper>Users</UsersTitleWrapper>
      </UsersHeaderWrapper>
      <LabelAndInputWrapper>
        <label>Filter</label>
        <EditInput
          style={{ width: '30%' }}
          onChange={e => onFilterChange(e)}
        ></EditInput>
      </LabelAndInputWrapper>
      <GenericTable
        columns={columns}
        dataSource={isFilterInputFull ? filteredUsers : usersData}
        openEditRowPage={openEditRowPage}
      />
    </UsersWrapper>
  );
}
