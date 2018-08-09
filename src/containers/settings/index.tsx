import * as React from 'react'
import LogoNav from '../../components/general/LogoNav'
import styled from 'styled-components'
import copy from '../../img/icons/copy.svg'
import eyehide from '../../img/icons/eyehide.svg'
import eyereveal from '../../img/icons/eyereveal.svg'

interface IAccountSettingsProps {
    accountSettings: {
        feastsDistance: string,
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
            feastsDistance: '',
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

    public render() {
        const { email, password, profileUrl } = this.state.accountSettings

        return (
            <div>
                <LogoNav backPage={true} />
                <h2>Account settings</h2>


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



            </div>
        )
    }
}

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
    
}
    }

    img {
        height: 20px;
        width: 20px;
        cursor: pointer;
    }

`

export default AccountSettings