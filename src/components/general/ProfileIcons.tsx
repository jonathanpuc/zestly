import * as React from 'react'
import styled from 'styled-components'
// Assets
import koshy from '../../img/koshy.png'

const ProfileIcons: React.SFC<{}> = () => {
    return (
        <List>
            <li><img src={koshy} alt="koshy bruh" /></li>
            <li><img src={koshy} alt="koshy bruh" /></li>
            <li><img src={koshy} alt="koshy bruh" /></li>
        </List>
    )
}

export default ProfileIcons

const List = styled.ul`
    list-style-type: none;
    display: flex;
    li {        
        height: 3.8rem;	
        width: 3.8rem;
        
        display: inline-block;
        position: relative;
        left: 2rem;
        img {
            width: 100%;
            height: 100%;
            border: 3px solid #fff;
            border-radius: 50%;
        }
    }

    li:first-child {
        z-index: 1;
    }

    li:first-child + li {
        z-index: 2;
        transform: translateX(-1.1rem);
        & + li {
            z-index: 3;
            transform: translateX(-2.1rem);
        
        }
    }

`