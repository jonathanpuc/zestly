import * as React from 'react'
import styled from 'styled-components'
const MessageListItem: React.SFC<{}> = () => {
    return (
        <Outer>
            <PersonIcon> <img src="http://www.fillmurray.com/600/600" alt="bill murrary" /></PersonIcon>
            <div>
                <p>Amanda</p>
                <div>
                    <p>Lorem ipsum dolor sit amet conseasdasdqweqweqwe</p>
                </div>
            </div>
        </Outer>
    )
}

export default MessageListItem

const Outer = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 0px;
    background-color: #fff;
    border-bottom: 2px solid ${props => props.theme['97shade']};

    > div:last-child {

            max-width: 70%;
        > p:first-child {
            font-weight: 500;
            color: ${props => props.theme.purple};
        }

        div {
            p {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                max-width: 100%;
                color: #B3B3B3
            }
        }
    }
`

const PersonIcon = styled.div`
    margin-right: 10px;
    img {
        height: 90px;	
        width: 90px;
        border-radius: 50%;
        margin: 0 auto;
    }
`