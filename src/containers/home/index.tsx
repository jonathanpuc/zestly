import * as React from 'react';
import styled from 'styled-components'
// import Button from '../../components/general/Button'
import Search from '../../components/general/Search'
import Navigation from '../../components/general/Navigation'
import CardMeetCTA from '../../components/meet/cards/CardMeetCTA'
import CardBlock from '../../components/meet/cards/CardBlock'
import CardLarge from '../../components/meet/cards/CardLarge'
import Slider from '../../components/general/Slider'
interface IHomeState {
    meets: string[]
}
export default class Home extends React.Component<{}, IHomeState> {

    public state = {
        meets: []
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
                        initialSlide: 0,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: false,
                        slidesToShow: 1.1,
                        initialSlide: 0,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        infinite: false,
                        slidesToShow: 1.5,
                        initialSlide: 0,
                    }
                }
            ]
        }


        return (
            <div>
                <Navigation />
                <br />
                <Search />
                <MainContent>
                    <section>
                        <h2>So close I can taste it!</h2>
                        <Slider>
                            <CardBlock />
                            <CardBlock />
                            <CardBlock />
                            <CardBlock />
                            <CardBlock />
                            <CardBlock />
                        </Slider>
                        <button>More meets</button>
                    </section>
                    <div>
                        <CardMeetCTA />
                    </div>

                    <section>
                        <h2>What are you waiting for?</h2>

                        <Slider settings={largeCardSliderSettings}>
                            <CardLarge />
                            <CardLarge />
                            <CardLarge />
                            <CardLarge />
                            <CardLarge />
                            <CardLarge />
                        </Slider>
                        <button>More meets</button>
                    </section>
                </MainContent>

            </div>
        )
    }
}

const MainContent = styled.div`



    h2 {
        color: ${props => props.theme.grey};
        font-weight: 400;
    }

    > div:nth-child(2) {

        > div{
            margin: 0 auto;
        }
    }
    section {
        margin: 5rem 0px;
        padding-left: 6px;
        display: flex;
        flex-direction: column;
        button {
        height: 3.2rem;	
        width: 13rem;	
        font-size: 1.6rem;
        border-radius: 4px;	
        font-family: Larsseit;
        color: ${props => props.theme.grey};
        font-weight: 300;
        letter-spacing: .5px;
        border: 1px solid ${props => props.theme.grey};
        margin: 2.2rem auto auto auto;
        cursor: pointer;  
        background-color: #fff;  
        }
    }
`
