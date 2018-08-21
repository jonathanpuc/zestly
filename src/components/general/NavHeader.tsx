import * as React from 'react'
import styled from 'styled-components'
import logo from '../../img/logo.svg'
import arrowLeft from '../../img/icons/arrow-left.svg'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import share from '../../img/icons/share.svg'
import tick from '../../img/icons/tick.svg'
interface IProps extends RouteComponentProps<{}> {
    backPage: boolean,
    heading?: string,
    action?: { type: string, onClick: () => void },
    onBackClick?: () => void,
    fill?: boolean
}

const NavHeader: React.SFC<IProps> = (props) => {
    const handleBackClick = () => {
        // if callback function has been passed, call it
        if (props.onBackClick) {
            props.onBackClick()
        } else {
            props.history.goBack()
        }
    }

    const handleActionClick = () => {
        if (props.action) {
            // tslint:disable-next-line
            props.action ? props.action.onClick() : () => { }
        }

    }

    const actionIconReducer = {
        share,
        confirm: tick
    }

    const actionIcon = props.action ? actionIconReducer[props.action.type] : ''


    return (
        <Outer fill={props.fill}>
            {
                props.backPage && (
                    <BackArrow ><img onClick={handleBackClick} src={arrowLeft} alt="go back" /></BackArrow>
                )
            }

            <Heading>
                {props.heading ? <h2>{props.heading}</h2> : <h1><img src={logo} alt="zestly" /></h1>}
            </Heading>



            {actionIcon && <div ><img onClick={handleActionClick} src={actionIcon} alt={props.action && props.action.type} /></div>}
        </Outer>
    )

}

export default withRouter(NavHeader)

const Outer = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr min-content;
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
const Heading = styled.div`
    grid-column: 2 / 3;
    justify-self: center;
    align-items: center;

    h2 {
	color: #4A4A4A;
    font-size: 1.8rem;
    font-weight: 300;
    }
`

const BackArrow = styled.div`
    grid-column: 1 / 2;
    align-self: center;
    padding-left: 20px;
`
