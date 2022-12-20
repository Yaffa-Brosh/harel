import { urlConfig } from 'services/urlConfig';
import { requestHandling } from 'services/ajaxService';

export async function onUpdate(user, userId) {
  const allUrls = urlConfig(userId);
  const { updateUserByIdUrl } = allUrls['usersUrls'];
  return await requestHandling(updateUserByIdUrl, 'PUT', user, {
    title: 'Update User',
    success: 'Update User successfully',
    failure: 'Update User failed',
  });
}

export async function getUserById(userId) {
  const allUrls = urlConfig(userId);
  const { getUserById } = allUrls['usersUrls'];
  return await requestHandling(getUserById, 'GET');
}

export async function getAllUsers() {
  const allUrls = urlConfig();
  const { getAllUsersUrl } = allUrls['usersUrls'];
  return await requestHandling(getAllUsersUrl, 'GET');
}

export async function checkUser(email) {
  const allUrls = urlConfig();
  const { checkUserUrl } = allUrls['usersUrls'];
  return await requestHandling(checkUserUrl, 'POST', { email: email });
}
