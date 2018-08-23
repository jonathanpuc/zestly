import * as React from 'react'
import styled from 'styled-components'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import NavHeader from '../../components/general/NavHeader'
import SearchBar from '../../components/general/Search'
import cross from '../../img/icons/cross.svg'
import cutlery from '../../img/icons/cutlery.svg'
import arrowRight from '../../img/icons/arrow-right.svg'
import pin from '../../img/icons/pin.svg'

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
            <HeadNav>
              <NavHeader backPage={true} />
              <SearchBar />
            </HeadNav>
          ) : (
            <PlacesSearchBar>
              <input type="text" placeholder="Try &quot;Ramen&quot;" />
              <img src={cross} alt="clear search" />
            </PlacesSearchBar>
          )}
        </HeaderOuter>
      )
    }

    return (
      <React.Fragment>
        {renderHeader()}
        <LabelBlock>
          <p>Results</p>
        </LabelBlock>
        <LabelBlock>
          <p>Suggestions</p>
        </LabelBlock>
        <ListItem>
          <img src={cutlery} alt="food" />
          <p>Vegie Bar</p>
          <img src={arrowRight} alt="go to restaurant page" />
        </ListItem>
        <ListItem>
          <img src={cutlery} alt="food" />
          <p>Ramen</p>
          <img src={arrowRight} alt="search" />
        </ListItem>
        <LabelBlock>
          <p>Recent searches</p>
        </LabelBlock>
        <ListItem>
          <img src={pin} alt="suburb" />
          <p>Collingwood</p>
          <img src={arrowRight} alt="go to restaurant page" />
        </ListItem>
      </React.Fragment>
    )
  }
}

export default withRouter(Search)

const HeaderOuter = styled.div`
  background-color: #fff;
`

const HeadNav = styled.div`
  padding-bottom: 15px;
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

const LabelBlock = styled.div`
  padding: 10px 0px 10px 15px;

  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  p {
    color: ${props => props.theme.offblack};
    font-size: 1.4rem;
  }
`

const ListItem = styled.div`
  padding: 20px 15px;
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;
  p {
    color: ${props => props.theme.greyblack};
    font-size: 1.8rem;
    font-weight: 500;
  }
  img {
    margin-right: 20px;
  }
`
