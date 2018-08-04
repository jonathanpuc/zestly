import * as React from 'react';
import styled from 'styled-components'
// Assets
import pin from '../../../img/icons/pin.svg'
// Components
import ProfileIcons from '../../general/ProfileIcons'

const Card: React.SFC<{}> = (place) => {
    return (
        <CardOuter>
            <CardPhoto />
            <CardDetails>
                <div>
                    <span><img src={pin} alt="map pin" /> Fitzroy</span>
                    <h3>Vegie bar</h3>
                </div>
                <div>
                    <h4>7:00pm</h4>
                    <ProfileIcons />
                </div>

            </CardDetails>
        </CardOuter>
    )
}

export default Card

const CardOuter = styled.div`
    height: 13.3rem;	
    width: 34.9rem;	
    border-radius: 6px;	
    background-color: #FFFFFF;	
    box-shadow: 0 2px 14px 0 rgba(0,0,0,0.18), 0 2px 4px 0 rgba(0,0,0,0.15);
    display: grid;
    grid-template-columns: 13.3rem 21.6rem;
`

const CardPhoto = styled.div`
    grid-column: 1 / 2;
    height: 13.3rem;
    background-color: ${props => props.theme.blueFaded};
    border-radius: 6px 0px 0px 6px;

`

const CardDetails = styled.div`
    grid-column: 2 / 3;
    padding: 1.3rem 0 0 1.6rem;
    display: grid;

    div:last-child {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    h3 {
        font-size: 1.8rem;
        color: ${props => props.theme.purple};
    }
    h4 {
        font-size: 1.8rem;
        color: ${props => props.theme.green};
        text-transform: uppercase;
    }
    span {
        text-transform: uppercase;
        font-size: 1.2rem;
        color: ${props => props.theme.grey};
    }

    ul {
        align-self: flex-end;
        margin-bottom: 1.5rem;
    }

    img {
        height: 1.3rem;
        width: 1rem;
    }


`