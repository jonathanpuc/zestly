import * as React from 'react'
import styled from 'styled-components'
// import Button from '../../components/general/Button'
import Search from '../../components/general/Search'
import CardMeetCTA from '../../components/meet/cards/CardMeetCTA'
import CardBlock from '../../components/meet/cards/CardBlock'
import CardLarge from '../../components/meet/cards/CardLarge'
import CardRestaurant from '../../components/meet/cards/CardRestaurant'
import Slider from '../../components/general/Slider'
import Button from '../../components/general/Button'
import ButtonStyle from '../../components/styles/Button'
import { withRouter, RouteComponentProps } from 'react-router-dom'
interface IHomeState {
  meets: string[]
}

interface IHomeProps extends RouteComponentProps<{}> { }
class Home extends React.Component<IHomeProps, IHomeState> {
  public state = {
    meets: []
  }

  public goToSearchFeasts = () => {
    this.props.history.push('/search/feasts')
  }

  public render() {
    const largeCardSliderSettings = {
      infinite: false,
      slidesToShow: 2,
      initialSlide: 0,
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 320,
          settings: {
            infinite: false,
            slidesToShow: 1.05,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: false,
            slidesToShow: 1.1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 600,
          settings: {
            infinite: false,
            slidesToShow: 1.5,
            initialSlide: 0
          }
        }
      ]
    }

    return (
      <div>
        <Header>
          <Search onInputClick={this.goToSearchFeasts} />
        </Header>

        <MainContent>
          <section>
            <h2>Feasts happening soon!</h2>
            <Slider>
              <CardBlock />
              <CardBlock />
              <CardBlock />
              <CardBlock />
              <CardBlock />
              <CardBlock />
            </Slider>
            <SectionButton>More meets</SectionButton>
          </section>

          <div>

            <CardRestaurant />
          </div>
          <div>
            <CardMeetCTA />
          </div>

          <section>
            <h2>Upcoming feasts.</h2>

            <Slider settings={largeCardSliderSettings}>
              <CardLarge />
              <CardLarge />
              <CardLarge />
              <CardLarge />
              <CardLarge />
              <CardLarge />
            </Slider>
            <SectionButton>More meets</SectionButton>
          </section>
        </MainContent>
        <Sticky>
          <Button filled={true} bgColor="purple">
            Organise feast
          </Button>
        </Sticky>
      </div>
    )
  }
}

export default withRouter(Home)

const Header = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 15px;
  margin-top: -10.5px;
`
const MainContent = styled.div`
  padding-bottom: 5rem;

  h2 {
    color: ${props => props.theme.grey};
    font-weight: 300;
    font-size: 1.8rem;
  }

  > div:nth-child(2) {
    > div {
      margin: 0 auto;
    }
  }
  section {
    margin: 5rem 0px;
    padding-left: 6px;
    display: flex;
    flex-direction: column;
  }
`

const SectionButton = styled(ButtonStyle) `
  height: 3.2rem;
  width: 13rem;
  border-radius: 4px;
  color: ${props => props.theme.grey};
  letter-spacing: 0.5px;
  border: 1px solid ${props => props.theme.grey};
  margin: 2.2rem auto 2.2rem auto;
`

const Sticky = styled.div`
  position: fixed;
  bottom: 0;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  background-color: #fff;
  border: 1px solid ${props => props.theme.offwhite};
  button {
    margin-bottom: 1.5rem;
    border: none;
  }
`
