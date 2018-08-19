import * as React from 'react'
import styled from 'styled-components'
import message from './message.svg'
import people from './people.svg'
import puzzle from './puzzle.svg'

interface ITipCardProps {
    color: string,
    heading: string,
    copy: string
}
const TipCard: React.SFC<ITipCardProps> = (props: ITipCardProps) => {
    const determineStyle = (color: string) => {
        switch (color) {
            case 'green':
                return {
                    icon: people,
                    color: '#69B4A0'
                }
            case 'purple':
                return {
                    icon: message,
                    color: '#5A4DB2'
                }
            case 'red':
                return {
                    icon: puzzle,
                    color: '#B6486D'
                }
            default:
                return {
                    icon: people,
                    color: '#69B4A0'
                }
        }
    }

    const style = determineStyle(props.color)

    return (
        <Outer color={style.color}>
            <div>
                <img src={style.icon} alt="tip icon" />
                <h4>{props.heading}</h4>
            </div>
            <p>{props.copy}</p>
        </Outer>
    )

}


export default TipCard

const Outer = styled.div`
    margin: 0 auto;
	height: 16rem;
	width: 33rem;
	border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    > div:first-child {
        padding: 12px 0px;
        width: 85%;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
            margin-right: 7.5px;
        }
    }
    
    h4 {
        color: ${(props: any) => props.color};
        font-size: 1.8rem;
        font-weight: 500;
    }

    p {
        width: 85%;
        margin: 0 auto;
        color: ${props => props.theme.offblack};
    }
`
