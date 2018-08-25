import * as React from 'react';
import styled from 'styled-components'
// Assets
import LocationPin from './LocationPin'
import Sprite from '../../icons'

const Card: React.SFC<{}> = (place) => {
    return (
        <CardOuter>
            <LocationPin location='Fitzroy' />
            <h3>Vegie bar</h3>
            <h5>Modern European</h5>
            <Sprite icon='arrow-right' color='#fff' />
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

    > div:first-child {
        position: absolute;
        bottom: 7rem;
        right: 8.6rem;
    }

    > svg {
        position: absolute;
        bottom: 50%;
        right: 1.5rem;
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
