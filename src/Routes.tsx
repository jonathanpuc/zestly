import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Onboarding from './containers/onboarding'
import Login from './containers/login'
import Meets from './containers/meets'
import Dashboard from './containers/dashboard'
import Meet from './containers/meets/Page'
import Settings from './containers/settings'
import ProfileEdit from './containers/profile/Edit'
import Search from './containers/search'
// import Navigation from './components/general/Navigation'
// import Home from "./containers/Home";
// import Notes from "./containers/Notes";
// import Login from "./containers/Login";
// import Signup from "./containers/Signup";
// import NewNote from "./containers/NewNote";
// import Settings from "./containers/Settings";
// import NotFound from "./containers/NotFound";
// import AppliedRoute from "./components/AppliedRoute";
// import AuthenticatedRoute from "./components/AuthenticatedRoute";
// import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

interface IAuthRouteProps {
  authenticated: boolean
  component: React.ComponentType<{}>
  path: string
  exact: boolean
}

const AuthenticatedRoute = ({
  component: Component,
  authenticated,
  ...rest
}: IAuthRouteProps) => (
  <Route
    {...rest}
    // tslint:disable-next-line jsx-no-lambda
    render={(props: any) =>
      authenticated ? <Component /> : <Redirect to="/" />
    }
  />
)

const UnauthenticatedRoute = ({
  component: Component,
  authenticated,
  ...rest
}: IAuthRouteProps) => (
  <Route
    {...rest}
    // tslint:disable-next-line jsx-no-lambda
    render={(props: any) =>
      !authenticated ? <Component /> : <Redirect to="/home" />
    }
  />
)

const NotFound = () => <div>Not found man</div>

const Routes = ({ authenticated }: { authenticated: boolean }) => (
  <Switch>
    <UnauthenticatedRoute
      path="/"
      exact={true}
      component={Login}
      authenticated={authenticated}
    />
    <AuthenticatedRoute
      path="/home"
      exact={false}
      component={Dashboard}
      authenticated={authenticated}
    />
    <AuthenticatedRoute
      path="/settings"
      exact={false}
      component={Settings}
      authenticated={authenticated}
    />
    <AuthenticatedRoute
      path="/onboarding"
      exact={false}
      component={Onboarding}
      authenticated={authenticated}
    />
    <AuthenticatedRoute
      path="/search/:type"
      exact={false}
      component={Search}
      authenticated={authenticated}
    />
    <AuthenticatedRoute
      path="/meets"
      exact={false}
      component={Meets}
      authenticated={authenticated}
    />
    <AuthenticatedRoute
      path="/meet"
      exact={false}
      component={Meet}
      authenticated={authenticated}
    />
    <AuthenticatedRoute
      path="/profile/edit"
      exact={true}
      component={ProfileEdit}
      authenticated={authenticated}
    />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
