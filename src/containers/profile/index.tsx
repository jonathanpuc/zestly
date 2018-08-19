import * as React from 'react';
import styled from 'styled-components'
import TipCard from '../../components/profile/TipCard'

import pin from '../../img/icons/pin.svg'
import editDot from '../../img/icons/editDot.svg'
import cog from '../../img/icons/cog.svg'

export default class Profile extends React.Component<{}, {}> {

    public render() {
        return (
            <div>
                <Main>
                    <img src="http://www.fillmurray.com/700/700" alt="your profile photo" />
                    <h2>Bill, 67</h2>
                    <Location>
                        <img src={pin} alt="location" />
                        Collingwood
                    </Location>

                    <Tabs>
                        <div><img src={editDot} alt="edit profile" />Edit profile</div>
                        <div><img src={cog} alt="account settings" />Settings</div>
                    </Tabs>
                </Main>
                <TipCard color='red' heading='Meet more people' copy='People feel more comfortable meeting others that have 3 or more pictures on their profile.' >Yellow</TipCard>
            </div>
        )
    }


}

const Location = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    margin: 4px 0px 15px 0px;
    color: ${props => props.theme.grey};
    img {
        height: 13px;
        width: 9px;
        margin-right: 6.5px;
    }
`

const Tabs = styled.div`
    width: 100%;
    color: ${props => props.theme.blue};
    display: flex;
    justify-content: space-around;
    > div {
        padding: 15px 0px;
        display: flex;
        justify-content: space-around;
        img {
            margin-right: 12px;
        }
    }
`

const Main = styled.div`
    padding-top: 45px;
    display: grid;
    justify-items: center;
    background-color: #fff;
    > img:first-child {
        height: 15.8rem;
        height: 15.8rem;
        border-radius: 50%;
        border: 4px solid ${props => props.theme.offwhite};
        margin-bottom: 15px;
    }

    > h2 {
        font-size: 2.8rem;
        color: ${props => props.theme.purple};
    }
`


