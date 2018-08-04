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
                <ProfileIcons />
            </CardPhoto>
            <CardDetails>
                <h3>Vegie bar</h3>
                <h4>7:00pm</h4>
            </CardDetails>
        </CardOuter>
    )
}

export default Card

const CardOuter = styled.div`
    height: 27rem;	
    width: 33rem;
`

const CardPhoto = styled.div`
    height: 24rem;
    background: #000;
    position: relative;
    span {
        text-transform: uppercase;
        font-size: 1.2rem;
        color: #fff;
        position: absolute;
        bottom: 1.5rem;
        left: 1.5rem;
    }

    ul {
        position: absolute;
        bottom: 1.2rem;
        right: 1.5rem;
    }
    img {
        height: 1.3rem;
        width: 1rem;
    }
`

const CardDetails = styled.div`
    padding: 1.2rem 1rem 0 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h3 {
        font-size: 2rem;
        color: ${props => props.theme.purple};
    }
    h4 {
        font-size: 1.6rem;
        color: ${props => props.theme.green};
        text-transform: uppercase;
    }
`