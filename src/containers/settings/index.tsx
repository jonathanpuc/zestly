import * as React from 'react'
import NavHeader from '../../components/general/NavHeader'
import styled from 'styled-components'
import copy from '../../img/icons/copy.svg'
import eyehide from '../../img/icons/eyehide.svg'
import eyereveal from '../../img/icons/eyereveal.svg'
import warning from '../../img/icons/warning.svg'
import tick from '../../img/icons/tick.svg'
import Slider from 'rc-slider';
import ButtonStyle from '../../components/styles/Button'

import 'rc-slider/assets/index.css';
interface IAccountSettingsProps {
    accountSettings: {
        feastsDistance: number,
        email: string,
        password: string,
        profileUrl: string,
    }
}

interface IAccountSettingsState extends IAccountSettingsProps {
    hidePassword: boolean,
    changesMade: boolean
}

class AccountSettings extends React.Component<IAccountSettingsProps, IAccountSettingsState> {

    public state = {
        accountSettings: {
            feastsDistance: 0,
            email: '',
            password: '',
            profileUrl: 'https://zestly.app/usHLr32D',
        },
        hidePassword: true,
        changesMade: false
    }
    // public componentDidMount() {
    //     const accountSettings = this.props.accountSettings
    //     this.setState({ ...this.state, accountSettings })
    // }

    public handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const accountSettings = { ...this.state.accountSettings }
        accountSettings[field] = e.target.value
        this.setState({
            ...this.state,
            accountSettings
        })
    }

    public toggleShowPassword = () => {
        this.setState({ ...this.state, hidePassword: !this.state.hidePassword })
    }

    public copyProfileURL = () => {
        const copyText = document.getElementById('profileURL') as HTMLInputElement
        copyText.select()
        document.execCommand('copy')
    }

    public handleDistanceChange = (value: number) => {
        this.setState({ ...this.state, accountSettings: { ...this.state.accountSettings, feastsDistance: value } })
    }

    public confirmChanges = () => {
        console.log('succesfully saved')
    }

    public exit = () => {
        console.log('leaving byeeeee')
    }

    public deleteAccount = () => {
        console.log('deleting account byeeeee')
    }

    public render() {
        const { email, password, profileUrl, feastsDistance } = this.state.accountSettings

        return (
            <div>
                <NavHeader backPage={true} />
                <Heading>Account settings</Heading>
                <InputGroup>
                    <label htmlFor="feastsRange">
                        Find feasts up to
                    </label>
                    <DistanceDetails>
                        <p>Distance</p>
                        <p>{feastsDistance} km</p>
                    </DistanceDetails>
                    <Distance>
                        <Slider onChange={this.handleDistanceChange} value={feastsDistance} max={100} />
                    </Distance>
                </InputGroup>

                <InputGroup>
                    <label htmlFor="accountEmail">
                        Email
                </label>
                    <InputBlock>
                        <input type="email" id="accountEmail"
                            value={email}
                            onChange={(e) => this.handleInputChange(e, 'email')}
                        />
                    </InputBlock>
                </InputGroup>
                <InputGroup>
                    <label htmlFor="accountPassword">
                        Password
                </label>
                    <InputBlock>
                        <input type={this.state.hidePassword ? 'password' : 'text'} id="accountPassword"
                            value={password}
                            onChange={(e) => this.handleInputChange(e, 'password')} />
                        {this.state.hidePassword ? <img src={eyehide} alt="hide password" onClick={this.toggleShowPassword} /> : <img src={eyereveal} alt="show password" onClick={this.toggleShowPassword} />}
                    </InputBlock>
                </InputGroup>
                <InputGroup>
                    <label htmlFor="profileURL">Profile URL link</label>
                    <p>Use this to share your profile with friends</p>
                    <InputBlock>
                        <input type="text" id="profileURL" value={profileUrl} readOnly={true} />
                        <img src={copy} alt="copy to clipboard" onClick={this.copyProfileURL} />
                    </InputBlock>

                </InputGroup>

                <EditButtons>
                    <p onClick={this.exit}>Discard changes</p>
                    <ConfirmButton onClick={this.confirmChanges}>
                        <img src={tick} alt="confirm changes" />
                        Save changes
                    </ConfirmButton>
                </EditButtons>


                <DeleteAccount onClick={this.deleteAccount}>
                    <p>Whoa there's no going back from this</p>
                    <div>
                        <img src={warning} alt="warning" />
                        <p>Delete account</p>
                    </div>
                </DeleteAccount>
            </div>
        )
    }
}

const Heading = styled.h2`
    margin: 0px 0px 24px 9px;
`

const InputGroup = styled.div`
    margin: 15px 0px;
     label {
        display: block;
        margin-left: 9px;
        font-size: 1.8rem;
        font-weight: 500;
        color: ${props => props.theme.purple};
    }
    &:not(:last-child) {
        label {
            margin-bottom: 11px;
        }
    }
    p {
        margin-left: 9px;
        color: ${props => props.theme.grey};
        font-size: 14px;
        margin-bottom: 11px;
    }
`
const InputBlock = styled.div`
    background-color: #FAFAFA;
    height: 48px;
    border-top: 1px solid ${props => props.theme.grey};
    border-bottom: 1px solid ${props => props.theme.grey};
    display: flex;
    justify-content: space-between;
    padding: 0px 8px;
    align-items: center;

    input {
        font-size: 1.6rem;
        color: ${props => props.theme.grey};
        height: 100%;
        border: none;
        width: 95%;
        outline: none;
        background-color: #FAFAFA;
}
    }

    img {
        height: 20px;
        width: 20px;
        cursor: pointer;
    }
`

const Distance = InputBlock.extend`
    border: none;
    background-color: #fff;
    .rc-slider-track {
        background-color: ${props => props.theme.blueFaded};
    }

    .rc-slider-handle {
        background-color: ${props => props.theme.blue};
        border: none;
    }
    input {
        background-color: #fff;
    }
`

const DistanceDetails = styled.div`
    display: flex;
    justify-content: space-between;
    p:last-child {
        color: ${props => props.theme.purple};
        margin-right: 9px;
        font-weight: 500;
    }
`

const EditButtons = styled.div`
    padding: 2.5rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p:first-child {
        color: ${props => props.theme.red};
        cursor: pointer;
    }
`

const ConfirmButton = ButtonStyle.extend`
    display: flex;
    height: 4.8rem;	
    width: 16.873rem;
    background-color: ${props => props.theme.green};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        margin: 0px 7px 5px 0px;
    }
`

const DeleteAccount = styled.div`
    cursor: pointer;
    text-align: center;
    > p {
        font-size: 1.4rem;
        color: ${props => props.theme.grey};
        padding: 10px;
    }
    div {
        background-color: ${props => props.theme.red};
        color: #fff;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            margin: 0px 7px 5px 0px;
        }
        text-transform: uppercase;
    }

`


export default AccountSettings