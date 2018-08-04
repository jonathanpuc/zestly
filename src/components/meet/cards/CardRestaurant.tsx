import * as React from 'react';
import styled from 'styled-components'
// Assets
import pin from '../../../img/icons/pin.svg'

const Card: React.SFC<{}> = (place) => {
    return (
        <CardOuter>
            <span><img src={pin} alt="map pin" /> Fitzroy</span>
            <h3>Vegie bar</h3>
            <h5>Modern European</h5>
            <span>&rarr;</span>
        </CardOuter>
    )
}

export default Card

const CardOuter = styled.div`
    height: 24rem;	
    width: 33rem;
    background: #000;
    position: relative;
    color: #fff;
    span:first-child {
        text-transform: uppercase;
        font-size: 1.2rem;
        position: absolute;
        bottom: 5rem;
        left: 1.5rem;
    }
    h3 {
        font-size: 2rem;
        position: absolute;
        bottom: 1rem;
        left: 1.5rem;
        font-weight: 400;
    }
    h5 {
        font-size: 1.4rem;
        position: absolute;
        bottom: 5rem;
        right: 1.5rem;
        font-weight: 400;
    }
    span:last-child {
        font-size: 2rem;
        position: absolute;
        bottom: .8rem;
        right: 1.5rem;
    }
    img {
        height: 1.3rem;
        width: 1rem;
    }
`