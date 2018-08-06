import * as React from 'react'
import Messages from '../messages'
import Profile from '../profile'
import Home from '../home'
import Navigation from '../../components/general/Navigation'
import { withRouter, RouteComponentProps, Route, Switch } from 'react-router-dom'

interface IProps extends RouteComponentProps<{}> {
    backPage: boolean,
    onBackClick?: () => void
}

class Dashboard extends React.Component<IProps, {}> {


    public render() {

        const NotFound = () => (
            <div>
                {/* logonav with back btn on click going to '/home' */}
                Not found
            </div>
        )
        return (
            <div>
                {/* if (!props.params.location.include('home')) dont show navigation */}
                <Navigation />
                <Switch>
                    <Route exact={true} path="/home" component={Home} />
                    <Route exact={false} path="/home/profile" component={Profile} />
                    <Route exact={false} path="/home/messages" component={Messages} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Dashboard)