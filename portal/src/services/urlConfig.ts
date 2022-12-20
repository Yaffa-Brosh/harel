let harelBase = process.env.REACT_APP_HAREL_BASE_URL;

export const urlConfig = (id = '') => {
  const usersUrls = {
    getUserById: harelBase + `/users/${id}`,
    getAllUsersUrl: harelBase + '/users',
    updateUserByIdUrl: harelBase + `/users/${id}`,
    checkUserUrl: harelBase + `/users`,
  };

  return {
    usersUrls,
  };
};
