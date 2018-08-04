import * as React from 'react';
import styled from 'styled-components'
// Assets
import rightArrow from '../../../img/icons/arrow-right.svg'
import pin from '../../../img/icons/pin.svg'


const Card: React.SFC<{}> = (place) => {
    return (
        <CardOuter>
            <span><img src={pin} alt="map pin" /> Fitzroy</span>
            <h3>Vegie bar</h3>
            <h5>Modern European</h5>
            <Arrow src={rightArrow} alt="go" />
            <button>Meet here</button>
        </CardOuter>
    )
}

export default Card

const CardOuter = styled.div`
    height: 23.8rem;	
    width: 37.5rem;
    background: #5A4DB2;
    position: relative;
    color: #fff;
    span:first-child {
        text-transform: uppercase;
        font-size: 1.2rem;
        position: absolute;
        bottom: 7rem;
        right: 8.6rem;
        img {
            height: 1.3rem;
            width: 1rem;
            svg {
                fill: #fff;
            }
        }
    }
    h3 {
        font-size: 2.4rem;
        position: absolute;
        bottom: 4rem;
        left: 2.5rem;
        font-weight: 400;
    }
    h5 {
        font-size: 1.4rem;
        position: absolute;
        bottom: 2rem;
        left: 2.5rem;
        font-weight: 400;
        color: ${props => props.theme.grey};
    }

    button {
        height: 3.2rem;	
        width: 13rem;	
        border-radius: 4px;	
        background-color: ${props => props.theme.green};
        position: absolute;
        bottom: 3rem;
        right: 2.2rem;
        font-size: 1.6rem;
        color: #fff;
        font-family: Larsseit;
        font-weight: 300;
        letter-spacing: .5px;
    }

`
const Arrow = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    bottom: 50%;
    right: 1.5rem;
`