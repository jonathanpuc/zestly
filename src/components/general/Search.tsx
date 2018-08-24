import * as React from 'react'
import styled from 'styled-components'
import magnify from '../../img/icons/magnify.svg'
import cross from '../../img/icons/cross.svg'
interface ISearchBarState {
  query: string
}

interface ISearchBarProps {
  autofocus?: boolean
  onInputClick?: () => void
}

const NO_OP = () => {}

class Searchbar extends React.Component<ISearchBarProps, ISearchBarState> {
  public state = {
    query: ''
  }

  public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ query: event.currentTarget.value })
  }

  public handleClick = () => {
    const handler = this.props.onInputClick || NO_OP
    handler()
  }

  public render() {
    const { query } = this.state
    const { autofocus } = this.props
    const shouldFocus = autofocus ? true : false
    return (
      <Outer query={query} onClick={this.handleClick}>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Find a feast"
          autoFocus={shouldFocus}
        />
        <Icon>
          {this.state.query ? (
            <img src={cross} alt="clear search" />
          ) : (
            <img src={magnify} alt="search" />
          )}
        </Icon>
      </Outer>
    )
  }
}

const Icon = styled.span``

const Outer = styled.div`
  font-size: 1.8px;
  width: 35rem;
  background-color: #fff;
  height: 6.4rem;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid ${props => (props.query ? props.theme.purple : '#F0F0F0')};
  font-family: 'Larsseit';
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  position: relative;
  transition: all 0.5s linear;
  input {
    color: ${(props: any) => props.query && props.theme.purple};
    font-family: inherit;
    font-size: 1.8rem;
    height: 6.4rem;
    transition: border 0.5s linear;
    font-weight: 300;
    border: 1px solid ${props => (props.query ? props.theme.purple : '#F0F0F0')};
    border: 1px solid ${props => (props.query ? props.theme.purple : '#F0F0F0')};
    border-left: none;
    border-right: none;
    flex: 10;
    &::placeholder {
      color: #acacac;
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
`

export default Searchbar
