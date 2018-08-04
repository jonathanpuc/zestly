import * as React from 'react'
import styled from 'styled-components'
// Assets
import profile from '../../img/icons/profile.svg'
import chat from '../../img/icons/chat.svg'
import logo from '../../img/logo.svg'

interface IStyles {
    left: string,
    right: string,
    translateX: string
}

interface INavigationState {
    styles: {
        messages: IStyles,
        logo: IStyles,
        profile: IStyles
    },
    viewing: string
}

export default class extends React.Component<{}, INavigationState> {
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

    public onProfileSelected = () => {
        this.setState({
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
        })
    }

    public onLogoSelected = () => {
        this.setState({
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
                    right: '0%',
                    translateX: '0'
                }
            }
        })
    }

    public onMessageSelected = () => {
        this.setState({
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
        })

    }

    public render() {
        return (
            <Outer>
                <Nav viewing={this.state.viewing} styles={this.state.styles}>
                    <ProfileIcon ><img onClick={this.onProfileSelected} src={profile} alt="profile" /></ProfileIcon>
                    <LogoIcon onClick={this.onLogoSelected}><img src={logo} alt="logo" /></LogoIcon>
                    <MessagesIcon ><img src={chat} onClick={this.onMessageSelected} alt="messages" /></MessagesIcon>
                </Nav>
            </Outer>
        )
    }
}

const Outer = styled.div`
    margin-top: 1rem;
`

const ProfileIcon = styled.li`
    font-size: 2rem;
    color: ${props => props.theme.purple};
    font-weight: bold;
`
const LogoIcon = styled.li`
    margin-top: -5px;
`
const MessagesIcon = styled.li`
`

const Nav = styled.ul`

    height: 5.6rem;
    padding-top: 2rem;

    li {
        transition: all 0.1s linear;
        position: absolute;
        display: inline-block;
        padding: 0 1.5rem;
    }
    ${ProfileIcon} {
        left: ${(props: any) => props.styles.profile.left};
        right: ${(props: any) => props.styles.profile.right};
        transform: ${(props: any) => `translate(${props.styles.profile.translateX})`};
    } 
    ${LogoIcon} {
        left: ${(props: any) => props.styles.logo.left};
        right: ${(props: any) => props.styles.logo.right};
        transform: ${(props: any) => `translate(${props.styles.logo.translateX})`};
    }
    ${MessagesIcon} {
        left: ${(props: any) => props.styles.messages.left};
        right: ${(props: any) => props.styles.messages.right};
        transform: ${(props: any) => `translate(${props.styles.messages.translateX})`};
    }
`

