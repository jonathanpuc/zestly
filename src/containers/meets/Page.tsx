import * as React from 'react';
import LogoNav from '../../components/general/LogoNav'
import styled from 'styled-components'
import cutlery from '../../img/icons/cutlery.svg'
import pin from '../../img/icons/pin.svg'


export default class MeetPage extends React.Component<{}, {}> {

    public render() {
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

    h3 {
        color: ${props => props.theme.offblack};
        font-weight: 500;
        font-size: 18px;
    }

    p {
        color: #9E9E9E;
        font-size: 12px;
    }
`

const VenueDetails = styled.div`
    color: ${props => props.theme.purple};
    > div {
        display: flex;
        p {
            font-weight: 500;
            font-size: 14px;
        }
    }


    
`

const MeetDetails = styled.section`
    padding: 2.5rem 1.5rem;
    background-color: #FAFAFA;
    img {
        height: 12px;
        width: 12px;
        margin: 5px 5px 0px 0px;
    }
`