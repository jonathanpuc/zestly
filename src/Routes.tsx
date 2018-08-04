import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from 'styled-components'
import Onboarding from './containers/onboarding'
import Login from './containers/login'
import Home from './containers/home'
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
    authenticated: boolean,
    component: React.ComponentType<{}>,
    path: string,
    exact: boolean
}

const AuthenticatedRoute = ({ component: Component, authenticated, ...rest }: IAuthRouteProps) =>
    <Route
        {...rest}
        // tslint:disable-next-line jsx-no-lambda
        render={(props: any) =>
            authenticated
                ? <Component />
                : <Redirect
                    to='/login'
                />}
    />;

const UnauthenticatedRoute = ({ component: Component, authenticated, ...rest }: IAuthRouteProps) =>
    <Route
        {...rest}
        // tslint:disable-next-line jsx-no-lambda
        render={(props: any) =>
            !authenticated
                ? <Component />
                : <Redirect
                    to='/'
                />}
    />;




const Routes = ({ authenticated }: { authenticated: boolean }) => (

    <Container>
        <Content>
            <Switch>
                <AuthenticatedRoute path="/" exact={true} component={Home} authenticated={authenticated} />
                <UnauthenticatedRoute path="/login" exact={true} component={Login} authenticated={authenticated} />
                <AuthenticatedRoute path="/onboarding" exact={true} component={Onboarding} authenticated={authenticated} />
                {/* <Route path="/" exact component={Home} props={childProps} /> */}
                { /* Finally, catch all unmatched routes */}
                {/* <Route component={NotFound} /> */}
            </Switch>
        </Content>
    </Container>
)

export default Routes

const Container = styled.div`
    /* max-width: 90%;
    margin: 0 auto; */
    /* display: flex;
    justify-content: center; */
`

const Content = styled.div`
    /* display: inline-block; */
`