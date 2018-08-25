import * as React from 'react';
import styled from 'styled-components'
// Assets
import Sprite from '../../icons'
import LocationPin from './LocationPin'

const Card: React.SFC<{}> = (place) => {
    return (
        <CardOuter>
            <LocationPin location='fitzroy' />
            <h3>Vegie bar</h3>
            <h5>Modern European</h5>
            <Sprite icon='arrow-right' color="#fff" />
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
    div:first-child {
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
    > svg:last-child {
        position: absolute;
        bottom: 1.8rem;
        right: 2.2rem;
    }
`