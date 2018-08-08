import * as React from 'react';
import LogoNav from '../../components/general/LogoNav'
import styled from 'styled-components'
import cutlery from '../../img/icons/cutlery.svg'
import pin from '../../img/icons/pin.svg'
import Slider from '../../components/general/Slider'
import tick from '../../img/icons/tick.svg'

export default class MeetPage extends React.Component<{}, {}> {

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

        const AttendingPerson = () => <PersonIcon> <img src="http://www.fillmurray.com/600/600" alt="bill murrary" /><p>Bill</p></PersonIcon>
        return (
            <div>
                <Header>
                    <LogoNav backPage={true} shareButton={true} />
                </Header>
                <MeetDetails>
                    <VenueDetails><h2>Vegie Bar</h2> <div><img src={cutlery} alt="fork and knife" /><p>Modern European</p></div></VenueDetails>
                    <LocationDetails>
                        <img src={pin} alt="location" />
                        <div>
                            <h3>Fitzroy, 175 Brunswick Street</h3>
                            <p>4km away</p>
                        </div>
                    </LocationDetails>
                    <AttendeeDetails>
                        <p>Already attending</p>
                        <Slider settings={slideSettings}>
                            {AttendingPerson()}
                            {AttendingPerson()}
                            {AttendingPerson()}
                            {AttendingPerson()}
                        </Slider>
                    </AttendeeDetails>
                    <VenueDescription>
                        <KnowLabel>
                            Known for
                            </KnowLabel>
                        <p>Vegan bar and eatery with a rock 'n' roll vibe focusing on Latin-inspired food.</p>
                    </VenueDescription>
                    <VenueDescription>
                        <KnowLabel>
                            Know more
                            </KnowLabel>
                        <AvailabilityList>
                            <li>
                                <img src={tick} alt='available' /> Full Bar available
                            </li>
                            <li>
                                <img src={tick} alt='available' /> Vegetarian Friendly
                            </li>
                            <li>
                                <img src={tick} alt='available' /> Gluten Free Options
                            </li>
                            <li>
                                <img src={tick} alt='available' /> Dairy Free
                            </li>
                            <li>
                                <img src={tick} alt='available' /> Vegan Options
                            </li>
                        </AvailabilityList>
                    </VenueDescription>
                </MeetDetails>
            </div>
        )
    }

}


const Header = styled.header`
    background-color: papayawhip;
    height: 40vh;
`

const LocationDetails = styled.div`
    display: flex;
    align-items: flex-start;
    background-color: #FAFAFA;
    padding: 16px;
    border-bottom: 1px solid #F0F0F0;
    h3 {
        color: ${props => props.theme.offblack};
        font-weight: 500;
        font-size: 18px;
    }

    p {
        color: #9E9E9E;
        font-size: 12px;
        margin-top: 2px;
    }
`

const VenueDetails = styled.div`
    color: ${props => props.theme.purple};
    background-color: #fff;
    padding: 25px 0px 18px 28px;
    > div {
        display: flex;
        p {
            font-weight: 500;
            font-size: 14px;
        }
    }
`

const MeetDetails = styled.section`
    background-color: #FAFAFA;
    h2 {
        margin-bottom: 7px;
    }
    img {
        height: 12px;
        width: 12px;
        margin: 3.5px 5px 0px 0px;
    }
`

const AttendeeDetails = styled.div`
    padding: 16px 16px 5px 16px;
    border-bottom: 1px solid #F0F0F0;
    > p:first-child {
        color: ${props => props.theme.purple};
        font-size: 1.2rem;
        margin-bottom: 6px;
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

const VenueDescription = styled.div`
    padding: 16px;
    color: ${props => props.theme.offblack};
    border-bottom: 1px solid #F0F0F0;
`

const KnowLabel = styled.h4`
	font-size: 14px;
    font-weight: 300;
    margin-bottom: 7.5px;
    color: ${props => props.theme.purple};
`
const AvailabilityList = styled.ul`
    li {
        display: flex;
        img {
            height: 15px;
            width: 15px;
            margin: 1px 10px 0px 0px;
        }
    }
`