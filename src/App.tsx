import * as React from 'react';
// import styled from 'styled-components'
import './App.css';
import Navigation from './components/general/Navigation'
// import Login from './containers/login'
import Routes from './Routes'

interface IState {
  authenticated: boolean
}

class App extends React.Component<{}, IState> {

  public state = {
    authenticated: true
  }

  public componentDidMount() {

  }

  public handleClick = () => {
    console.log('clicked')
  }
  public render() {
    return (
      <div className="App">
        <Navigation />
        {/* <Login /> */}
        <Routes authenticated={this.state.authenticated} />

      </div>
    );
  }
}

export default App




