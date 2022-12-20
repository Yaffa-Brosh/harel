import { EditUser } from 'app/components/editUser/EditUser';
import { Login } from 'app/components/login/Login';
import { Users } from 'app/components/users/Users';
import { Switch, Route } from 'react-router-dom';

export function Body() {
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => <Component {...props} />} />;
  };
  return (
    <Switch>
      <PrivateRoute path={'/'} component={Login}>
        <PrivateRoute exact path={'/'} component={Login} />
        <PrivateRoute exact path={'/home'} component={Users} />
        <PrivateRoute exact path={'/editUser/:id'} component={EditUser} />
      </PrivateRoute>
    </Switch>
  );
}
