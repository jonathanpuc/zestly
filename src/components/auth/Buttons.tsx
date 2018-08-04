import * as React from 'react';
import styled from 'styled-components'
import ButtonStyle from '../styles/Button'

interface IAuthButtonsProps {
    onClick?: (type: string) => void;
}

class AuthButtons extends React.Component<IAuthButtonsProps> {

    public state = {
        selected: 'login'
    }

    public handleClick = (type: string) => {
        this.setState({ selected: type })
        if (this.props.onClick) {
            this.props.onClick(type)
        }
    }

    public loginClicked = () => {
        this.handleClick('login')
    }

    public signupClicked = () => {
        this.handleClick('signup')
    }

    public render() {
        return (
            <Outer>
                <Button
                    selected={this.state.selected === 'login' ? true : false}
                    onClick={this.loginClicked}
                >
                    Login
            </Button>
                <Button
                    selected={this.state.selected === 'signup' ? true : false}
                    onClick={this.signupClicked}
                >
                    Sign up
            </Button>
            </Outer>
        )
    }
}

const Button = ButtonStyle.extend`
    text-align: center;
    width: 50%;
    background-color: ${(props: any) => props.selected && props.theme.green};
    color: ${(props: any) => props.selected ? '#fff' : props.theme.green};
`

const Outer = styled.div`
    height: 3.6rem;
    width: 32.8rem;
    margin: 0 auto;
    color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid ${props => props.theme.green};
    border-radius: 4px;

    ${Button}:first-child {
        border-radius: 4px 0px 0px 4px;
    }

    ${Button}:last-child {
        border-radius: 0px 4px 4px 0px;
    }
`



export default AuthButtons