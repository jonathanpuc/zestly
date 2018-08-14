import * as React from 'react';
import styled from 'styled-components'
import Slider from '../../components/general/Slider'
import MessageListItem from './MessageListItem'
import FeastGroup from './FeastGroup'

export default class Messages extends React.Component<{}, {}> {

    public render() {

        const slideSettings = {
            infinite: false,
            slidesToShow: 2,
            initialSlide: 0,
            adaptiveHeight: false,
            responsive: [
                {
                    breakpoint: 320,
                    settings: {
                        infinite: false,
                        slidesToShow: 3,
                        initialSlide: 0,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: false,
                        slidesToShow: 3.1,
                        initialSlide: 0,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        infinite: false,
                        slidesToShow: 4.5,
                        initialSlide: 0,
                    }
                },
                {
                    breakpoint: 2000,
                    settings: {
                        infinite: false,
                        slidesToShow: 6,
                        initialSlide: 0,
                    }
                }
            ]
        }


        const Person = () => <PersonIcon> <img src="http://www.fillmurray.com/600/600" alt="bill murrary" /><p>Bill</p></PersonIcon>


        return (
            <div>
                <Tabs>
                    <div>
                        Feasts
                </div>
                    <div>
                        Messages
                </div>
                </Tabs>

                <Section>
                    <SectionLabel>
                        <div>
                            <h4>People you're meeting</h4>
                        </div>
                    </SectionLabel>

                    <SectionBody>
                        <div>
                            <Slider settings={slideSettings}>
                                {Person()}
                                {Person()}
                                {Person()}
                                {Person()}
                            </Slider>
                        </div>
                    </SectionBody>
                </Section>
                <Section>
                    <SectionLabel>
                        <div>
                            <h4>Feast groups</h4>
                        </div>
                    </SectionLabel>

                    <SectionBody>
                        <div>
                            <Slider settings={slideSettings}>
                                <FeastGroup />
                            </Slider>
                        </div>
                    </SectionBody>
                </Section>
                <Section>
                    <SectionLabel>
                        <div>
                            <h4>Personal messages</h4>
                        </div>
                    </SectionLabel>

                    <SectionBody>
                        <div>
                            <MessageListItem />
                            <MessageListItem />
                            <MessageListItem />
                            <MessageListItem />


                        </div>
                    </SectionBody>
                </Section>
            </div>
        )
    }
}

const Tabs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #fff;
    margin: 2px 0px 4px 0px;
    color: ${props => props.theme.purple};
    div {
        height: 4.8rem;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Section = styled.section`
    background-color: #fff;
    margin-bottom: 5px;

`

const SectionLabel = styled.div`
    border-bottom: 1px solid ${props => props.theme['97shade']};
    h4 {
        font-size: 1.4rem;
        color: ${props => props.theme.offblack};
        font-weight: 400;
    }

    > div:first-child {
        padding: 12px;
    }
`

const SectionBody = styled.div`

    > div:first-child {
        padding: 12px;
    }
`

const PersonIcon = styled.div`
    display: flex!important;
    text-align: center;
    flex-direction: column;
    img {
        height: 90px;	
        width: 90px;
        border-radius: 50%;
        margin: 0 auto;
    }

    p {
        color: ${props => props.theme.purple};
        font-weight: 500;
        margin-top: 8px;
    }
`