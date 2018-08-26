import * as React from 'react';
// import styled from 'styled-components'
import './App.css';

import { API, graphqlOperation } from 'aws-amplify'

import { ListUsers } from './graphql'

import Routes from './Routes'

interface IState {
  authenticated: boolean,
}

class App extends React.Component<{}, IState> {

  public state = {
    authenticated: false,
  }

  public componentDidMount() {
    // @ts-ignore
    // API.graphql(graphqlOperation(ListUsers, queryUsers)).then(res => console.log(res))
    // @ts-ignore
    API.graphql(graphqlOperation(ListUsers)).then((res: any) => {
      console.log(res)
    })
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




