import * as React from 'react'
import NavHeader from '../../../components/general/NavHeader'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import ProfilePhotoGrid from '../../../components/profile/ProfilePhotoGrid'
import styled from 'styled-components'


interface IProfileEditProps extends RouteComponentProps<{}> {
    backPage: boolean,
    onBackClick?: () => void,
    shareButton?: boolean,
    fill?: boolean
}

interface IProfileEditState {
    aboutMe: string
}


class ProfileEdit extends React.Component<IProfileEditProps, IProfileEditState> {

    public state = {
        aboutMe: ''
    }
    public confirmChanges = () => {
        console.log('changes confirmed')
    }

    public exit = () => {
        this.props.history.push('/home/profile')
    }

    public handleAboutMe = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ aboutMe: e.target.value })
    }
    public render() {


        return (
            <div>
                <NavHeader
                    backPage={true}
                    heading='Edit your profile'
                    onBackClick={this.exit}
                    action={{ type: 'confirm', onClick: this.confirmChanges }}
                />
                <Margin>
                    <ProfilePhotoGrid />
                </Margin>
                <AboutMeBlock>
                    <label htmlFor="ask-me">About me</label>
                    <div>
                        <textarea value={this.state.aboutMe} onChange={this.handleAboutMe} />
                        <p>{this.state.aboutMe.length}</p>
                    </div>
                </AboutMeBlock>
                <InputBlock>
                    <label htmlFor="ask-me">Ask me</label>
                    <div>
                        <input type="text" placeholder="How I won..." />
                    </div>
                </InputBlock>
            </div>
        )
    }
}

export default withRouter(ProfileEdit)

const Margin = styled.div`
    margin-top: 60px;
`
const InputBlock = styled.div`
    margin-bottom: 20px;
    label {
        color: ${props => props.theme.purple};
        font-size: 1.6rem;
        margin: 0px 0px 10px 12px;
        display: block;
    }

    > div {
        border: 1px solid #ACACAC;
        background-color: #FCFBFC;
        input, textarea {
            display: block;
            padding-left: 12px;
            height: 4.8rem;
            width: 100%;
            font-size: 1.6rem;
            font-weight: 300;
            border: none;
            background-color: #FCFBFC;
            &::placeholder {
                color: ${props => props.theme.grey};
            }
            resize: none;
        }
    }
`

const AboutMeBlock = styled(InputBlock) `
    margin-top: 50px;
    > div {
        position: relative;
        textarea {
            height: 130px;
            padding-top: 10px;
        }

        p {
            position: absolute;
            bottom: 5px;
            right: 10px;
        }


    }

`