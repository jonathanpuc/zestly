import * as React from 'react'
import Sprite from '../../icons'
import styled from 'styled-components'

interface ILocationPinProps {
    location: string,
    color?: string
}

const LocationPin: React.SFC<ILocationPinProps> = (props: ILocationPinProps) => {
    return (
        <Outer>
            <Sprite icon='pin' color={props.color || "#ffffff"} />
            <p>{props.location}</p>
        </Outer>

    )
}

const Outer = styled.div`
display: inline-flex;
    align-items: center;
 p {
    text-transform: uppercase;
    font-size: 1.2rem;
    color: #fff;
 }

 svg {
    height: 1.3rem;
    width: 1rem;
    transform: translateY(-2px);
    margin-right: 5px;
 }
`


export default LocationPin