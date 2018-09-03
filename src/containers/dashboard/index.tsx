import * as React from 'react'
import { connect } from 'react-redux'
import Messages from '../messages'
import Profile from '../profile'
import Home from '../home'
import Navigation from '../../components/general/Navigation'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { GetUser } from '../../graphql'
import {
  withRouter,
  RouteComponentProps,
  Route,
  Switch
} from 'react-router-dom'
import styled from 'styled-components'

interface IProps extends RouteComponentProps<{}>, IStateProps {
  backPage: boolean
  onBackClick?: () => void
}

class Dashboard extends React.Component<IProps, {}> {

  public async componentDidMount() {

    if (this.props.authenticated) {
      console.log('mounted')
      const userDetails = await Auth.currentAuthenticatedUser()
      console.log(userDetails, 'dashboard')

      const uuid = userDetails.id ? userDetails.id : userDetails.username
      const res: any = await API.graphql(graphqlOperation(GetUser, { uuid }))
      console.log(res)
      const { profile } = res.data.getUser
      console.log(profile)
      // user hasn't completed onboarding
      if (profile.askMe === null || profile.distance === null || profile.location === null || profile.seeking === null) {
        this.props.history.push('/onboarding')
      }

    }
  }
  public render() {
    const NotFound = () => (
      <div>
        {/* NavHeader with back btn on click going to '/home' */}
        Not found
      </div>
    )

    return (
      <div>
        <Header>
          {/* if (!props.params.location.include('home')) dont show navigation */}
          <Navigation />
        </Header>
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

interface IStateProps {
  authenticated: boolean
}

const mapStateToProps = (state: any) => ({ authenticated: state.user.auth })


export default withRouter(connect(mapStateToProps, null)(Dashboard))




const Header = styled.div`
  background-color: #fff;
  padding: 1.3rem 1rem 0rem 1rem;
`

