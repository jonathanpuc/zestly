import * as React from 'react';
import { connect } from 'react-redux'
import Routes from './Routes'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface IProps extends RouteComponentProps<{}>, IStateProps {

}

class App extends React.Component<IProps, {}> {

  public componentDidMount() {
  }

  public handleClick = () => {
    console.log('clicked')
  }


  public render() {
    return (
      <div className="App">
        <Routes authenticated={this.props.authenticated} />
      </div>
    );
  }
}

interface IStateProps {
  authenticated: boolean
}

const mapStateToProps = (state: any) => ({
  authenticated: state.user.auth
})

export default withRouter(connect(mapStateToProps, null)(App))




