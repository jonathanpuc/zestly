import * as React from 'react'
import styled from 'styled-components'
import logo from '../../img/logo.svg'
import arrowLeft from '../../img/icons/arrow-left.svg'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface IProps extends RouteComponentProps<{}> {
    backPage: boolean,
    onBackClick?: () => void
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

    return (
        <Outer>
            {
                props.backPage && (
                    <BackArrow onClick={handleBackClick}><img src={arrowLeft} alt="go back" /></BackArrow>
                )
            }
            <Logo src={logo} alt="zestly" />

        </Outer>
    )

}

export default withRouter(LogoNav)

const Outer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 2.3rem 1rem 1rem 1rem;
`

const Logo = styled.img`
    grid-column: 2 / 3;
    justify-self: center;
    align-items: center;
`

const BackArrow = styled.div`
    grid-column: 1 / 2;
    justify-self: center;
    align-items: center;
    cursor: pointer;
    display: flex;
`

