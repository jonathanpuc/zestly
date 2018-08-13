import * as React from 'react'
import styled from 'styled-components'
import logo from '../../img/logo.svg'
import arrowLeft from '../../img/icons/arrow-left.svg'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import share from '../../img/icons/share.svg'
interface IProps extends RouteComponentProps<{}> {
    backPage: boolean,
    onBackClick?: () => void,
    shareButton?: boolean,
    fill?: boolean
}

const LogoNav: React.SFC<IProps> = (props) => {
    const handleBackClick = () => {
        // if callback function has been passed, call it
        if (props.onBackClick) {
            props.onBackClick()
        } else {
            props.history.goBack()
        }

    }

    const shareFunction = () => {
        console.log('share clicked')
    }

    return (
        <Outer fill={props.fill}>
            {
                props.backPage && (
                    <BackArrow ><img onClick={handleBackClick} src={arrowLeft} alt="go back" /></BackArrow>
                )
            }
            <Logo><img src={logo} alt="zestly" /></Logo>

            {props.shareButton && <div ><img onClick={shareFunction} src={share} alt='share meet' /></div>}
        </Outer>
    )

}

export default withRouter(LogoNav)

const Outer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 2.3rem 1rem 1rem 1rem;
    background-color: ${(props: any) => props.fill ? '#fff' : 'inherit'};
    img {
        cursor: pointer;
    }

    > div:last-child {
        align-self: center;
        grid-column: 3 / 4;
        justify-self: end;
        padding-right: 20px; 
    }
`

const Logo = styled.h1`
    grid-column: 2 / 3;
    justify-self: center;
    align-items: center;
`

const BackArrow = styled.div`
    grid-column: 1 / 2;
    align-self: center;
    padding-left: 20px;
`

