import * as React from 'react'
import styled from 'styled-components'
import EmailLoginInterface from './EmailLogin'
import LogoNav from '../../components/general/LogoNav'

interface IState {
    emailAuth: boolean
}

export default class Login extends React.Component<{}, IState> {
    public state = {
        emailAuth: false
    }

    public switchToEmail = (): void => {
        this.setState({ emailAuth: true })
    }

    public handleBackClick = (): void => {
        this.setState({ emailAuth: false })
    }

    public renderMain = (): React.ReactElement<'div'> => {
        return (
            <MainOuter>
                <div />

                <MainInterface>
                    <h2>Share experiences. <span>Meet new people.</span></h2>
                    <SocialButtons>
                        <SocialButton>Sign in with Facebook</SocialButton>
                        <div>
                            <SocialButton type='google'>Sign in with Google</SocialButton>
                            <p>We'll <span>never</span> post with your permission.</p>
                        </div>
                    </SocialButtons>

                    <EmailLogin>login with an <span onClick={this.switchToEmail}>email</span></EmailLogin>

                </MainInterface>
            </MainOuter>
        )
    }

    public render() {
        return (
            <Outer>
                <LogoNav backPage={this.state.emailAuth} onBackClick={this.handleBackClick} />
                {
                    this.state.emailAuth ? <EmailLoginInterface /> : this.renderMain()
                }
            </Outer>

        )
    }
}

const Outer = styled.div`
`

const MainOuter = styled.div`
    background-color: ${props => props.theme.purple};
    display: grid;
    grid-template-rows: repeat(2, 1fr);

    > div:first-child {
        background-color: ${props => props.theme.purple};
    }
`

const MainInterface = styled.div`
    align-self: end;
    display: grid;
    grid-template-rows: repeat(5, min-content);
    grid-row-gap: 20px;
    padding-top: 3rem;
	border-radius: 15px 15px 0 0;
	background-color: #fff;
    box-shadow: 0 -3px 7px 0 rgba(0,0,0,0.1);
    text-align: center;
    h2 {
        color: ${props => props.theme.purple};
        font-size: 1.8rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        span {
            color: ${props => props.theme.green};  
        }
    }

`

const SocialButtons = styled.div`
    display: grid;
    grid-template-rows: repeat(2, min-content);
    justify-items: center;
    grid-gap: 14px;
    text-align: center;
    p {
        margin-top: 12px;
        color: ${props => props.theme.grey};
        font-size: 1.2rem;
        span {
            font-weight: bold;
        }
    }
`

const SocialButton = styled.button`
    height: 4rem;
    width: 24.8rem;
    border-radius: 2px;
    background-color: ${(props: any) => props.type === 'google' ? '#fff' : '#2553B4'};
    color: ${(props: any) => props.type === 'google' ? 'rgba(0,0,0,0.54)' : '#fff'};
    box-shadow: 0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24), 0 0 8px 0 rgba(0,0,0,0.12), 0 8px 8px 0 rgba(0,0,0,0.24);
    font-family: 'Larsseit';	
    font-size: 1.4rem;	
    font-weight: 500;	
    letter-spacing: 0.22px;
    cursor: pointer;
`

const EmailLogin = styled.p`
    margin-top: 
	line-height: 21px;
    text-align: center;
    
    span {
        color: ${props => props.theme.purple};
        font-weight: 500;
        text-decoration: underline;
        cursor: pointer;
    }
`