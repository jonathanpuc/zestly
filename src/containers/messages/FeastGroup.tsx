import * as React from 'react'
import styled from 'styled-components'

const FeastGroup: React.SFC<{}> = () => {
    return (
        <Outer>
            <AttendeesBlock>
                <img src="http://www.fillmurray.com/600/600" alt="bill murrary" />
                <div>
                    <img src="http://www.fillmurray.com/600/600" alt="bill murrary" />
                    <img src="http://www.fillmurray.com/600/600" alt="bill murrary" />
                    <img src="http://www.fillmurray.com/600/600" alt="bill murrary" />
                    <span>+2</span>
                </div>

            </AttendeesBlock>
            <GroupDetails>
                <p><span>Today </span>7:30PM</p>
                <p>Smith &amp; Daughters</p>
                <p>Amanda: Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur</p>
            </GroupDetails>
        </Outer>
    )
}

export default FeastGroup

const Outer = styled.div`
    display: flex;
    justify-content: flex-start;
`

const AttendeesBlock = styled.div`
    position: relative;
    margin-right: 10px;
    > img:first-child {
        height: 76px;	
        width: 76px;
        border-radius: 50%;
    }
    > div {
        bottom: -5px;
        position: absolute;
        width: 82px;
        img {
        height: 26px;	
        width: 26px;
        border-radius: 50%;
        border: 2px solid #FFFFFF;
        }

        img:first-child {
            z-index: 1;
            transform: translateX(4px);
        }
        img:first-child + img {
            z-index: 2;
        }
        img:nth-child(3) {
            z-index: 3;
            transform: translateX(-4px);
        }

        span {
            font-size: 12px;
            transform: translate(-3px,-6px);
            color: ${props => props.theme.grey};
            display: block;
            position: absolute;
            bottom: 0;
            right: 8px;
        }
    }
`

const GroupDetails = styled.div`
    display: inline-flex;
    align-items: flex-start;
    flex-direction: column;
    max-width: 70%;
    justify-content: center;
    > p:first-child {
            font-size: 1.4rem;

            span {
                color: ${props => props.theme.red};
                font-weight: 500;
                text-transform: uppercase;
            }
    }

    > p:nth-child(2) {
        font-size: 1.8rem;
        color: ${props => props.theme.purple};
        font-weight: 400;
    }

    > p:last-child {
        color: ${props => props.theme.grey};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 100%;
    }
`

