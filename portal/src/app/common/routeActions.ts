import { useHistory } from 'react-router-dom';

const useRouteActions = () => {
  const history = useHistory();

  const pushHistory = (route: string, state: any = {}) => {
    history.replace({ pathname: route, state });
  };
  const getHistory = () => history;

  return {
    pushHistory,
    getHistory,
  };
};

export { useRouteActions };
