import * as React from 'react';
import styled from 'styled-components'

interface ISearchBarState {
    query: string
}

class Searchbar extends React.Component<{}, ISearchBarState> {

    public state = {
        query: ''
    }

    public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({ query: event.currentTarget.value })
    }

    public render() {
        return (
            <Outer query={this.state.query}>
                {this.state.query && <Label>Search:</Label>}
                <input
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Search meets" />
                <Icon>{this.state.query ? 'X' : '🔍'}</Icon>
            </Outer>
        )
    }
}

const Icon = styled.span``

const Label = styled.span`
`

const Outer = styled.div`
    font-size: 1.6px;
    width: 35rem;
    height: 4.8rem;
    border-radius: 4px;
    border: 1px solid #F0F0F0;
    font-family: 'Larsseit';
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    position: relative;
      input {
        color: ${(props: any) => props.query && props.theme.green};
        font-weight: ${(props: any) => props.query ? 'bold' : '300'};
        font-family: inherit;
        font-size: 1.8rem;
        height: 4.8rem;

        border-top: 1px solid #F0F0F0;
        border-bottom: 1px solid #F0F0F0;
        border-left: none;
        border-right: none;
        flex: 10;
        &::placeholder {
          color: #ACACAC;
          font-size: 1.6rem;
        } 
        &:focus {
          outline: none;
        }
  
    }
    ${Icon} {
        font-size: 1.6rem;
        justify-self: flex-end;
        margin-right: 1.6rem;
    }
    ${Label} {
        font-size: 1.6rem;
        display: inline-block;
        display: ${(props: any) => props.query ? 'block' : 'none'};
        margin-right: 5px;
        color: #ACACAC;
        margin-bottom: -2px;
    }
`

export default Searchbar