import * as React from 'react';
import styled from 'styled-components'
// Assets
import pin from '../../../img/icons/pin.svg'
// Components
import ProfileIcons from '../../general/ProfileIcons'

const Card: React.SFC<{}> = (place) => {
    return (
        <CardOuter>
            <CardPhoto>
                <span><img src={pin} alt="map pin" /> Fitzroy</span>
            </CardPhoto>
            <CardDetails>
                <div>
                    <h3>Vegie bar</h3>
                    <h4>7:00pm</h4>
                </div>
                <ProfileIcons />
            </CardDetails>
        </CardOuter>
    )
}

export default Card

const CardOuter = styled.div`
    height: 22rem;
    width: 23rem;
    border-radius: 6px;
    box-shadow: 0 2px 14px 0 rgba(0,0,0,0.18), 0 2px 4px 0 rgba(0,0,0,0.15);
`

const CardPhoto = styled.div`
    height: 13rem;
    background-color: ${props => props.theme.blueFaded};
    position: relative;
    border-radius: 6px 6px 0px 0px;
    span {
        text-transform: uppercase;
        font-size: 1.2rem;
        color: #fff;
        position: absolute;
        bottom: .5rem;
        left: 1.5rem;
    }

    img {
        height: 1.3rem;
        width: 1rem;
    }
`

const CardDetails = styled.div`
    padding-left: 2rem;
    padding-top: 1.2rem;
    display: flex;
    flex-direction: row;
    h3 {
        font-size: 2rem;
        color: ${props => props.theme.purple};
        margin-bottom: 1rem;
    }
    h4 {
        font-size: 1.8rem;
        color: ${props => props.theme.green};
        text-transform: uppercase;
    }

    ul {
        align-self: flex-end;
    }
`