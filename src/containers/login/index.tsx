import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import EmailLoginInterface from './EmailLogin'
import NavHeader from '../../components/general/NavHeader'
import logo from '../../img/logo.svg'
import homeBG from './home.png'
import { withFederated } from 'aws-amplify-react';
import { handleAuth } from '../../store/actions/user'

interface IState {
    emailAuth: boolean
}

interface IProps extends IDispatchProps {
    facebookSignIn: () => void
}

class Login extends React.Component<IProps, IState> {


    public state = {
        emailAuth: false
    }

    public componentDidMount() {

    }


    public switchToEmail = (): void => {
        this.setState({ emailAuth: true })
    }

    public handleBackClick = (): void => {
        this.setState({ emailAuth: false })
    }

    public facebookSignIn = (): void => {
        this.props.facebookSignIn()
    }

    public handleAuthStageChange = async (e: any) => {

        if (e === 'signedIn') {

            this.props.handleAuth('social')
        }
    }



    public render() {





        const renderMain = (): React.ReactElement<'div'> => {
            return (
                <MainOuter>
                    <Banner>
                        <img src={logo} alt="zestly logo" />
                    </Banner>
                    <MainInterface>
                        <h2>Share experiences. <span>Meet new people.</span></h2>

                        <Federated federated={federated} onStateChange={this.handleAuthStageChange} />
                        <EmailLogin>login with an <span onClick={this.switchToEmail}>email</span></EmailLogin>

                    </MainInterface>
                </MainOuter>
            )
        }

        return (
            <Outer>
                {
                    this.state.emailAuth ? <React.Fragment><NavHeader backPage={this.state.emailAuth} onBackClick={this.handleBackClick} /><EmailLoginInterface /></React.Fragment> : renderMain()
                }
            </Outer>

        )
    }
}

const Buttons = (props: any) => (
    <SocialButtons>
        <SocialButton onClick={props.facebookSignIn}>Sign in with Facebook</SocialButton>
        <div>
            <SocialButton type='google' onClick={props.googleSignIn}>Sign in with Google</SocialButton>
            <p>We'll <span>never</span> post with your permission.</p>
        </div>
    </SocialButtons>

)



const federated = {
    google_client_id: '346584850779-35rlioghlcj7oj96s5777pg4un7gvpne.apps.googleusercontent.com',
    facebook_app_id: '302960233813320',
    amazon_client_id: ''
};


const Federated = withFederated(Buttons)


interface IDispatchProps {
    handleAuth: (authType: string) => any
}
export default connect(null, { handleAuth })(Login)



const Outer = styled.div`
`

const MainOuter = styled.div`
    background-color: ${props => props.theme.purple};
    height: 100vh;

`

const Banner = styled.div`
    background: url(${homeBG});
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    padding: 1rem;
    height: 50vh;
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
    height: 50vh;
    
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