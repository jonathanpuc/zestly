import * as React from 'react';
import styled from 'styled-components'
// Components
import ProfileIcons from '../../general/ProfileIcons'
import LocationPin from './LocationPin'

const Card: React.SFC<{}> = (place) => {
    return (
        <CardOuter>
            <CardPhoto>
                <LocationPin location='Fitzroy' />
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
    > div:first-child {
        position: absolute;
        bottom: 1.5rem;
        left: 1.5rem;
    }

    ul {
        position: absolute;
        bottom: 1.2rem;
        right: 1.5rem;
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