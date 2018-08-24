import * as React from 'react'
import styled from 'styled-components'
// Assets
import profile from '../../img/icons/profile.svg'
import chat from '../../img/icons/chat.svg'
import logo from '../../img/logo.svg'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface IStyles {
  left: string
  right: string
  translateX: string
}

interface INavigationState {
  styles: {
    messages: IStyles
    logo: IStyles
    profile: IStyles
  }
  viewing: string
}

interface INavigationProps extends RouteComponentProps<{}> {}

class Navigation extends React.Component<INavigationProps, INavigationState> {
  public state = {
    styles: {
      messages: {
        left: '',
        right: '0%',
        translateX: '0'
      },
      logo: {
        left: '50%',
        right: '',
        translateX: '-50%'
      },
      profile: {
        left: '0%',
        right: '',
        translateX: '0'
      }
    },
    viewing: ''
  }

  public componentDidMount() {
    const path = this.props.location.pathname
    if (
      (path.includes('/home') && path.includes('/profile')) ||
      path.includes('messages')
    ) {
      const page = path.split('/')[2]
      this.setStyle(page)
    }
  }

  public getStylingState = (page: string) => {
    switch (page) {
      case 'profile':
        return {
          styles: {
            profile: {
              left: '50%',
              right: '',
              translateX: '-50%'
            },
            logo: {
              left: 'initial',
              right: '0%',
              translateX: '2rem'
            },
            messages: {
              left: '',
              translateX: '4rem',
              right: '0%'
            }
          }
        }

      case 'index':
        return {
          styles: {
            messages: {
              left: '',
              right: '0%',
              translateX: '0'
            },
            logo: {
              left: '50%',
              right: '',
              translateX: '-50%'
            },
            profile: {
              left: '0%',
              right: '',
              translateX: '0'
            }
          }
        }

      case 'messages':
        return {
          styles: {
            profile: {
              left: '0%',
              right: 'initial',
              translateX: '-4rem'
            },
            logo: {
              left: '0%',
              right: 'initial',
              translateX: '-2rem'
            },
            messages: {
              left: '50%',
              right: 'initial',
              translateX: '-50%'
            }
          }
        }

      default:
        return {}
    }
  }

  public setStyle = (page: string) => {
    const style = this.getStylingState(page)
    this.setState({ ...this.state, ...style })
  }

  public onProfileSelected = () => {
    this.setStyle('profile')
    this.props.history.push('/home/profile')
  }

  public onLogoSelected = () => {
    this.setStyle('index')
    this.props.history.push('/home')
  }

  public onMessageSelected = () => {
    this.setStyle('messages')
    this.props.history.push('/home/messages')
  }

  public render() {
    return (
      <Nav viewing={this.state.viewing} styles={this.state.styles}>
        <ProfileIcon>
          <img onClick={this.onProfileSelected} src={profile} alt="profile" />
        </ProfileIcon>
        <LogoIcon onClick={this.onLogoSelected}>
          <h1>
            <img src={logo} alt="zestly" />
          </h1>
        </LogoIcon>
        <MessagesIcon>
          <img src={chat} onClick={this.onMessageSelected} alt="messages" />
        </MessagesIcon>
      </Nav>
    )
  }
}

export default withRouter(Navigation)

const ProfileIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.purple};
  font-weight: bold;
`
const LogoIcon = styled.div`
  margin-top: -5px;
`
const MessagesIcon = styled.div``

const Nav = styled.nav`
  height: 5.6rem;
  padding-top: 2rem;

  div {
    transition: all 0.1s linear;
    position: absolute;
    display: inline-block;
    padding: 0 1.5rem;
  }
  ${ProfileIcon} {
    left: ${(props: any) => props.styles.profile.left};
    right: ${(props: any) => props.styles.profile.right};
    transform: ${(props: any) =>
      `translate(${props.styles.profile.translateX})`};
  }
  ${LogoIcon} {
    left: ${(props: any) => props.styles.logo.left};
    right: ${(props: any) => props.styles.logo.right};
    transform: ${(props: any) => `translate(${props.styles.logo.translateX})`};
  }
  ${MessagesIcon} {
    left: ${(props: any) => props.styles.messages.left};
    right: ${(props: any) => props.styles.messages.right};
    transform: ${(props: any) =>
      `translate(${props.styles.messages.translateX})`};
  }
`
