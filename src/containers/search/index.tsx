import * as React from 'react'
import styled from 'styled-components'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import NavHeader from '../../components/general/NavHeader'
import SearchBar from '../../components/general/Search'
import cross from '../../img/icons/cross.svg'

interface IMatchParams {
  type: string
}
interface ISearchProps extends RouteComponentProps<IMatchParams> {}
class Search extends React.Component<ISearchProps, {}> {
  public render() {
    const { type } = this.props.match.params

    const renderHeader = () => {
      return (
        <HeaderOuter>
          {type === 'feasts' ? (
            <React.Fragment>
              <NavHeader backPage={true} />
              <SearchBar />
            </React.Fragment>
          ) : (
            <PlacesSearchBar>
              <input type="text" placeholder="Try &quot;Ramen&quot;" />
              <img src={cross} alt="clear search" />
            </PlacesSearchBar>
          )}
        </HeaderOuter>
      )
    }

    return <div>{renderHeader()}</div>
  }
}

export default withRouter(Search)

const HeaderOuter = styled.div`
  background-color: #fff;
`
const PlacesSearchBar = styled.div`
  position: relative;

  input {
    font-size: 18px;
    width: 100%;
    height: 5.6rem;
    padding-left: 15px;
    display: block;
    &::placeholder {
      color: ${props => props.theme.grey};
    }
  }

  img {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`
