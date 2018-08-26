import * as React from 'react';
// import styled from 'styled-components'
import './App.css';


import Routes from './Routes'

interface IState {
  authenticated: boolean,
}

class App extends React.Component<{}, IState> {

  public state = {
    authenticated: false,
  }

  public componentDidMount() {
  }

  public handleClick = () => {
    console.log('clicked')
  }


  public render() {
    return (
      <div className="App">
        <Routes authenticated={this.state.authenticated} />
      </div>
    );
  }
}

export default App




