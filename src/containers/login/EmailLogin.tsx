import * as React from 'react';
import styled from 'styled-components'
import ButtonStyle from '../../components/styles/Button'

import { Auth } from 'aws-amplify'

// helpers
import { validateEmail } from '../../helpers/validators'

import LoginRegisterButton from '../../components/auth/Buttons'

interface IEmailLoginState {
    showing: string,
    email: string,
    password: string,
    awaitingSignupCode: boolean,
    signupCode: string
}

export default class EmailLogin extends React.Component<{}, IEmailLoginState> {

    public state = {
        showing: 'login',
        email: '',
        password: '',
        awaitingSignupCode: false,
        signupCode: ''
    }

    public handleAuthStateChange = (type: string) => {
        this.setState({ showing: type, password: '' })
    }

    public handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: e.target.value })
    }

    public handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: e.target.value })
    }

    public handleSignupCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ signupCode: e.target.value })
    }

    public handleFormSubmission = async (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        if (this.state.showing === 'login') {
            // do login stuff
        } else if (this.state.showing === 'signup' && this.state.signupCode) {

            try {
                const res = await Auth.confirmSignUp(this.state.email, this.state.signupCode)
                console.log(res)
            } catch (e) {
                console.log(e)
            }
        } else {
            try {
                const res = await Auth.signUp({
                    username: this.state.email,
                    password: this.state.password
                })
                console.log(res)
                this.setState({ awaitingSignupCode: true })
            } catch (e) {
                console.log(e)
            }
        }
    }

    public renderMessage = () => (
        <Message>
            <h3>{this.state.showing === 'login' ? 'Welcome back!' : 'Awesome, welcome!'}</h3>
        </Message>
    )

    public validateForm() {
        return validateEmail(this.state.email) && this.state.password.length > 0 ? true : false
    }





    public render() {
        return (
            <Outer>
                <LoginRegisterButton onClick={this.handleAuthStateChange} />
                {this.renderMessage()}
                <Form onSubmit={this.handleFormSubmission}>
                    {this.state.awaitingSignupCode ?
                        <React.Fragment>
                            <ConfirmationMessage>We've sent you a confirmation code, please enter it below.</ConfirmationMessage>
                            <ConfirmationCode onChange={this.handleSignupCodeChange} value={this.state.signupCode} />
                        </React.Fragment>
                        :
                        (<React.Fragment>
                            <Email
                                type="email"
                                onChange={this.handleEmailChange}
                                value={this.state.email}
                                placeholder="Email Address"
                                id="email"
                                required={true} />
                            <label htmlFor="email">Email address</label>

                            <Password
                                type="password"
                                onChange={this.handlePasswordChange}
                                value={this.state.password}
                                placeholder="Password"
                                id="password"
                                required={true} />
                            <label htmlFor="password">Password</label>
                        </React.Fragment>
                        )
                    }
                    <SubmitButton type="submit" disabled={!this.validateForm()}>{this.state.showing}</SubmitButton>
                </Form>
            </Outer>
        );
    }
}

const Outer = styled.div`
    padding-top: 3rem;
`

const Message = styled.div`
    text-align: center;
    margin-top: 4rem;
    h3 {
        font-size: 2rem;
        color: ${props => props.theme.purple};
        &:before, &:after {
            content: '';
            display: inline-block;
            width: 7.75rem;
            border: 1px solid #F0F0F0;
            transform: translate(0, -4px);
        }
        &:before {
            margin-right: 1rem;
        }
        &:after {
            margin-left: 1rem;
        }
    }
`

const Email = styled.input`
    border-radius: 4px 4px 0 0;
`

const Password = styled.input`
    border-radius: 0 0 4px 4px;
    border-top: none;
    margin-top: -26px;
`

const ConfirmationCode = styled.input`
    border-radius: 4px;
`

const ConfirmationMessage = styled.p`
    margin-bottom: 10px;
    max-width: 80%;
`

const SubmitButton = ButtonStyle.extend`
    background-color: ${(props: any) => props.theme.purple};
    text-transform: capitalize;
    height: 4rem;	
    width: 32.8rem;
    margin-top: 2rem;
    color: #fff;
    transition: transform 0.3s ease;
    &:disabled {
        opacity: 0.5;
    }

    &:hover:enabled{
        cursor: pointer;
        transform: translateY(-2px);
    }

`


const Form = styled.form`
    display: flex;
    flex-direction: column;

    align-items: center;
    margin-top: 2rem;

    label {
        font-size: 1.2rem;
        margin-left: 2rem;
        margin-top: .7rem;
        display: block;
        transition: all .3s;
        transform: translate(-11rem, -7rem);
        background-color: #fff;
        padding: 0 4px;
        color: ${props => props.theme.purple};
        font-size: 1.4rem;
    }

    label:nth-of-type(2){
        transform: translate(-12.5rem, -7rem);
    }
    input {
        height: 5.6rem;	
        width: 32.8rem;
        border: 1px solid #D9D9D9;
        font-size: 1.6rem;
        padding-left: 17px;
        transition: all .3s;
        &::placeholder {
            color: #BFBFBF;
        }
        &:placeholder-shown + label {
                opacity: 0;
                visibility: hidden;
                transform: translate(-11rem, -5rem);
              
        }

        &:placeholder-shown + label:nth-of-type(2) {
                opacity: 0;
                visibility: hidden;
                transform: translate(-12.5rem, -5rem);
              
        }

        &:focus {
            outline: none;
            border-bottom: 3px solid ${props => props.theme.green};
        }
        &:focus:invalid {
            border-bottom: 3px solid #ff7730;
        }
    }
`

