import * as React from 'react'
import NavHeader from '../../../components/general/NavHeader'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import ProfilePhotoGrid from '../../../components/profile/ProfilePhotoGrid'
import styled from 'styled-components'

import plus from '../../../img/icons/plus.svg'
import instagram from '../../../img/icons/instagram.png'
import tick from '../../../img/icons/tick.svg'
import ButtonStyle from '../../../components/styles/Button'
import SeekingTag from '../SeekingTag'


interface IProfileEditProps extends RouteComponentProps<{}> {
  backPage: boolean
  onBackClick?: () => void
  shareButton?: boolean
  fill?: boolean
}

interface IProfileEditState {
  aboutMe: string,
  seeking: string[]
}

class ProfileEdit extends React.Component<
  IProfileEditProps,
  IProfileEditState
  > {
  public state = {
    aboutMe: '',
    seeking: []
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

  public handleSeekingButtonClick = (type: string) => {
    const seeking: string[] = [...this.state.seeking]
    // @ts-ignore
    if (seeking.includes(type)) {
      this.setState({ ...this.state, seeking: seeking.filter(t => t !== type) })
    } else {
      seeking.push(type)
      this.setState({ ...this.state, seeking })
    }
  }
  public render() {
    return (
      <Outer>
        <NavHeader
          backPage={true}
          heading="Edit your profile"
          onBackClick={this.exit}
          action={{ type: 'confirm', onClick: this.confirmChanges }}
        />
        <Margin>
          <ProfilePhotoGrid />
        </Margin>
        <AboutMeBlock>
          <label htmlFor="ask-me">About me</label>
          <div>
            <textarea
              value={this.state.aboutMe}
              onChange={this.handleAboutMe}
            />
            <p>{this.state.aboutMe.length}</p>
          </div>
        </AboutMeBlock>
        <InputBlock>
          <label htmlFor="ask-me">Ask me</label>
          <div>
            <input type="text" placeholder="How I won..." />
          </div>
        </InputBlock>
        <SeekingBlock>
          <label>Open to</label>
          <p>Select one or both</p>

          <div>
            <SeekingTag
              type='relationship'
              seeking={this.state.seeking}
              onTagClick={this.handleSeekingButtonClick}
            />
            <SeekingTag
              type='friends'
              seeking={this.state.seeking}
              onTagClick={this.handleSeekingButtonClick}
            />
          </div>
        </SeekingBlock>

        <InstagramBlock>
          <label>Instagram</label>
          <img src={instagram} alt="instagram" />
          <div>
            <input type="text" placeholder="Link Instagram" disabled={true} />
            <img src={plus} alt="link your instagram" />
          </div>
        </InstagramBlock>

        <ConfirmEdits>
          <ButtonStyle>Discard changes</ButtonStyle>

          <ButtonStyle>
            <img src={tick} alt="confirm" />
            Save changes
          </ButtonStyle>
        </ConfirmEdits>
      </Outer>
    )
  }
}



export default withRouter(ProfileEdit)

const Outer = styled.div`
  background-color: #fff;
`

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
    border: 1px solid #acacac;
    border-left: none;
    border-right: none;
    background-color: #fcfbfc;
    input,
    textarea {
      display: block;
      padding-left: 12px;
      height: 4.8rem;
      width: 100%;
      font-size: 1.6rem;
      font-weight: 300;
      border: none;
      background-color: #fcfbfc;
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

const SeekingBlock = styled(InputBlock) `
  label {
    margin-bottom: 0px;
  }
  > p {
    font-size: 14px;
    color: ${props => props.theme.grey};
    margin-left: 10px;
  }

  > div:last-child {
    background-color: #fff;
    padding: 10px;
    border: none;
    display: flex;
    justify-content: flex-start;
    > div {
      margin-right: 8px;
    }
  }
`



const InstagramBlock = styled(InputBlock) `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 0px;
  > img {
    height: 16px;
    width: 16px;
    justify-self: end;
    margin-right: 10px;
  }
  > div:last-child {
    grid-column: 1 / -1;
    position: relative;

    img {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

const ConfirmEdits = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0px 10px 0px;
  button {
    height: 4.8rem;
    width: 16.8rem;
  }

  button:first-child {
    color: ${props => props.theme.red};
  }
  button:last-child {
    background-color: ${props => props.theme.green};
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
  }
`
