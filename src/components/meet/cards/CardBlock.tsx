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
    border: 1px solid ${props => props.theme.offwhite};
`

const CardPhoto = styled.div`
    height: 13rem;
    background-color: ${props => props.theme.blueFaded};
    position: relative;
    border-radius: 6px 6px 0px 0px;
    > div:first-child {
        position: absolute;
        bottom: .5rem;
        left: 1.5rem;
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