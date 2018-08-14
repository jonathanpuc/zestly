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

        </Outer>
    )
}

export default FeastGroup

const Outer = styled.div`
 
`

const AttendeesBlock = styled.div`
    > img:first-child {
        height: 76px;	
        width: 76px;
        border-radius: 50%;
    }
    > div {
        position: absolute;
        bottom: -5px;
        img {
        height: 26px;	
        width: 26px;
        border-radius: 50%;
        border: 2px solid #FFFFFF;
        position: relative;
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
            right: -13px;
        }
    }



`

